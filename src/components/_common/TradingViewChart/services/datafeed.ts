import { makeApiRequest, parseResolution } from "./birdeye/helpers";
import {
    subscribeOnStream,
    closeSocket,
} from "./birdeye/streaming";
import {
    DatafeedConfiguration,
    LibrarySymbolInfo,
    ResolutionString,
    SearchSymbolResultItem,
} from "../library";

export const SUPPORTED_RESOLUTIONS = [
    "1",
    "3",
    "5",
    "15",
    "30",
    "60",
    "120",
    "240",
    "1D",
] as const;

type BaseBar = {
    low: number;
    high: number;
    open: number;
    close: number;
};

type KlineBar = BaseBar & {
    volume: number;
    timestamp: number;
};

type TradingViewBar = BaseBar & {
    time: number;
};

type Bar = KlineBar & TradingViewBar;

export type SymbolInfo = LibrarySymbolInfo & {
    address: string;
};

const lastBarsCache = new Map();
const subscriptionIds = new Map();

const configurationData = {
    supported_resolutions: [
        "1",
        "3",
        "5",
        "15",
        "30",
        "60",
        "120",
        "240",
        "1D",
        "1W",
    ],
    intraday_multipliers: ["1", "3", "5", "15", "30", "60", "120", "240"],
    exchanges: [],
};

// interface Token {
//     address: string;
//     symbol: string;
//     type: string;
// }

// async function getAllSymbols(): Promise<Token[]> {
//     const data = await makeApiRequest(
//         "defi/tokenlist?sort_by=v24hUSD&sort_type=desc&offset=0&limit=-1"
//     );

//     return data.data.tokens;
// }

export const queryBirdeyeBars = async (
    tokenAddress: string,
    resolution: (typeof SUPPORTED_RESOLUTIONS)[number],
    periodParams: {
        firstDataRequest: boolean;
        from: number;
        to: number;
    }
): Promise<Bar[]> => {
    try {
        const { from, to } = periodParams;

        const urlParameters = {
            address: tokenAddress,
            type: parseResolution(resolution),
            time_from: from,
            time_to: to,
        };

        const query = Object.keys(urlParameters)
            .map(
                (name: string) =>
                    `${name}=${encodeURIComponent(
                        (urlParameters as any)[name]
                    )}`
            )
            .join("&");

        const data = await makeApiRequest(`defi/ohlcv?${query}`);
        if (!data.success || data.data.items.length === 0) {
            return [];
        }

        let bars: Bar[] = [];
        for (const bar of data.data.items) {
            if (bar.unixTime >= from && bar.unixTime < to) {
                const timestamp = bar.unixTime * 1000;
                if (bar.h >= 223111) continue;
                bars = [
                    ...bars,
                    {
                        time: timestamp,
                        low: bar.l,
                        high: bar.h,
                        open: bar.o,
                        close: bar.c,
                        volume: bar.v,
                        timestamp,
                    },
                ];
            }
        }
        return bars;
    } catch (e) {
        console.log("failed to query birdeye bars", e);
        return [];
    }
};

const datafeed = {
    onReady: (callback: (configuration: DatafeedConfiguration) => void) => {
        console.log("[onReady]: Method call");
        setTimeout(() => callback(configurationData as any));
    },

    searchSymbols: async (
        _userInput: string,
        _exchange: string,
        _symbolType: string,
        _onResultReadyCallback: (items: SearchSymbolResultItem[]) => void
    ) => {
        // Provide an empty implementation if no search functionality is needed
        _onResultReadyCallback([]);
    },

    resolveSymbol: async (
        symbolAddress: string,
        onSymbolResolvedCallback: (symbolInfo: SymbolInfo) => void
    ) => {
        // const symbols = await getAllSymbols();
        // const symbolItem = symbols.find(
        //     (item) => item.address === symbolAddress
        // );

        // if (!symbolItem) {
        //     console.log(
        //         "[resolveSymbol]: Cannot resolve symbol",
        //         symbolAddress
        //     );
        //     return;
        // }
        const symbolInfo: SymbolInfo = {
            // address: symbolItem.address,
            // ticker: symbolItem.address,
            // name: symbolItem.symbol,
            // full_name: symbolItem.symbol,
            // description: symbolItem.symbol + "/USD",
            // type: symbolItem.type,
            address: symbolAddress,
            ticker: symbolAddress,
            name: "SOL",
            full_name: "Solana",
            description: "SOL" + "/USD",
            type: "spot",
            session: "24x7",
            timezone: "Etc/UTC",
            exchange: "",
            listed_exchange: "",
            minmov: 1,
            pricescale: 10 ** 16,
            has_intraday: true,
            has_no_volume: true,
            has_weekly_and_monthly: false,
            supported_resolutions:
                configurationData.supported_resolutions as any,
            intraday_multipliers: configurationData.intraday_multipliers,
            volume_precision: 2,
            data_status: "streaming",
            format: "price",
        };

        console.log("[resolveSymbol]: Symbol resolved", symbolAddress);
        onSymbolResolvedCallback(symbolInfo);
    },

    getBars: async (
        symbolInfo: SymbolInfo,
        resolution: ResolutionString,
        periodParams: {
            countBack: number;
            firstDataRequest: boolean;
            from: number;
            to: number;
        },
        onHistoryCallback: (
            bars: Bar[],
            t: {
                noData: boolean;
            }
        ) => void,
        onErrorCallback: (e: any) => void
    ) => {
        try {
            const { firstDataRequest } = periodParams;
            let bars;

            bars = await queryBirdeyeBars(
                symbolInfo.address,
                resolution as any,
                periodParams
            );
            if (!bars || bars.length === 0) {
                // "noData" should be set if there is no data in the requested period.
                onHistoryCallback([], {
                    noData: true,
                });
                return;
            }
            if (firstDataRequest) {
                lastBarsCache.set(symbolInfo.address, {
                    ...bars[bars.length - 1],
                });
            }
            onHistoryCallback(bars, {
                noData: false,
            });
            return bars;
        } catch (error) {
            console.warn("[getBars]: Get error", error);
            onErrorCallback(error);
        }
    },

    subscribeBars: (
        symbolInfo: SymbolInfo,
        resolution: string,
        onRealtimeCallback: (data: any) => void,
        subscriberUID: string,
        onResetCacheNeededCallback: () => void
    ) => {
        subscriptionIds.set(subscriberUID, symbolInfo.address);
        subscribeOnStream(
            symbolInfo,
            resolution,
            (data: any) => {
                console.log(
                    `[subscribeBars]: Received data from WebSocket for ${symbolInfo.address}`,
                    data
                );
                onRealtimeCallback(data);
            },
            subscriberUID,
            onResetCacheNeededCallback,
            lastBarsCache.get(symbolInfo.address)
        );
    },

    unsubscribeBars: (subscriberUID: string) => {
        // console.log("[unsubscribeBars]");
        // unsubscribeFromStream();
    },

    closeSocket: () => {
        closeSocket();
    },
    name: "birdeye",
};

export default datafeed;
