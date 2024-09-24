import {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import ReactGridLayout, {
    Layout,
    Layouts,
    Responsive,
    WidthProvider,
} from "react-grid-layout";
// import {
//     widget,
//     ChartingLibraryWidgetOptions,
//     IChartingLibraryWidget,
//     ResolutionString,
//     AvailableSaveloadVersions,
// } from "./library";
// import useLocalStorageState from "./services/hooks/useLocalStorageState";
// import { COLORS } from "./constants/tradingColorsData";
// import Datafeed from "./services/datafeed";
// import { formatPrice } from "./services/birdeye/helpers";
// import {
//     RESOLUTION_KEY,
//     TV_CHART_CONTAINER_ID,
//     TRADE_LAYOUT_KEY,
//     SIDEBAR_KEY,
// } from "./constants/tradingViewConstants";
// import {
//     breakpoints,
// } from "./services/hooks/useViewport";

export type TradeLayout =
    | "chartLeft"
    | "chartMiddleOBRight"
    | "chartMiddleOBLeft"
    | "chartRight";


// const ResponsiveGridLayout = WidthProvider(Responsive);
//
// const TradingViewChart = () => {
//     const [chartReady, setChartReady] = useState(false);
//     const [userId] = useLocalStorageState("tv-userId-0.1", "");
//     const [savedResolution] = useLocalStorageState<ResolutionString>(
//         RESOLUTION_KEY,
//         "60"
//     );
//
//     const defaultProps = useMemo(() => {
//         return {
//             symbol: "So11111111111111111111111111111111111111112",
//             interval: savedResolution,
//             theme: "Light",
//             container: TV_CHART_CONTAINER_ID,
//             libraryPath: "/charting_library/",
//             chartsStorageUrl: "https://tv-backend-v4.herokuapp.com",
//             chartsStorageApiVersion: "1.1" as AvailableSaveloadVersions,
//             clientId: "fomofactory",
//             fullscreen: false,
//             autosize: true,
//             studiesOverrides: {
//                 "volume.volume.color.0": COLORS.DOWN["Light"],
//                 "volume.volume.color.1": COLORS.UP["Light"],
//                 "volume.precision": 4,
//             },
//         };
//     }, [savedResolution]);
//
//     const tvWidgetRef = useRef<IChartingLibraryWidget>();
//
//     useEffect(() => {
//         let mktAddress = "So11111111111111111111111111111111111111112";
//         if (tvWidgetRef.current && chartReady && mktAddress) {
//             try {
//                 tvWidgetRef.current.setSymbol(
//                     mktAddress,
//                     tvWidgetRef.current.activeChart().resolution(),
//                     () => {
//                         return;
//                     }
//                 );
//             } catch (e) {
//                 console.warn("Trading View change symbol error: ", e);
//             }
//         }
//     }, [chartReady]);
//
//     useEffect(() => {
//         let chartStyleOverrides = {
//             "paneProperties.background": COLORS.BKG1["Light"],
//             "paneProperties.backgroundType": "solid",
//             "paneProperties.legendProperties.showBackground": false,
//             "paneProperties.legendProperties.showStudyTitles": false,
//             "scalesProperties.showStudyLastValue": false,
//             "scalesProperties.fontSize": 11,
//             "scalesProperties.lineColor": COLORS.BKG4["Light"],
//         };
//
//         const mainSeriesProperties = [
//             "candleStyle",
//             "hollowCandleStyle",
//             "haStyle",
//             "barStyle",
//         ];
//         mainSeriesProperties.forEach((prop) => {
//             chartStyleOverrides = {
//                 ...chartStyleOverrides,
//                 [`mainSeriesProperties.${prop}.barColorsOnPrevClose`]: true,
//                 [`mainSeriesProperties.${prop}.drawWick`]: true,
//                 [`mainSeriesProperties.${prop}.drawBorder`]: true,
//                 [`mainSeriesProperties.${prop}.upColor`]: COLORS.UP["Light"],
//                 [`mainSeriesProperties.${prop}.downColor`]:
//                     COLORS.DOWN["Light"],
//                 [`mainSeriesProperties.${prop}.borderColor`]:
//                     COLORS.UP["Light"],
//                 [`mainSeriesProperties.${prop}.borderUpColor`]:
//                     COLORS.UP["Light"],
//                 [`mainSeriesProperties.${prop}.borderDownColor`]:
//                     COLORS.DOWN["Light"],
//                 [`mainSeriesProperties.${prop}.wickUpColor`]:
//                     COLORS.UP["Light"],
//                 [`mainSeriesProperties.${prop}.wickDownColor`]:
//                     COLORS.DOWN["Light"],
//             };
//         });
//
//         const marketAddress = "So11111111111111111111111111111111111111112";
//         const widgetOptions: ChartingLibraryWidgetOptions = {
//             symbol: marketAddress,
//             datafeed: Datafeed,
//             interval:
//                 defaultProps.interval as ChartingLibraryWidgetOptions["interval"],
//             container:
//                 defaultProps.container as ChartingLibraryWidgetOptions["container"],
//             library_path: defaultProps.libraryPath as string,
//             locale: "en",
//             enabled_features: ["hide_left_toolbar_by_default"],
//             disabled_features: [
//                 "use_localstorage_for_settings",
//                 "timeframes_toolbar",
//                 "show_logo_on_all_charts",
//                 "caption_buttons_text_if_possible",
//                 "header_settings",
//                 "header_compare",
//                 "compare_symbol",
//                 "header_screenshot",
//                 !userId ? "header_saveload" : "",
//                 "header_undo_redo",
//                 "header_interval_dialog_button",
//                 "show_interval_dialog_on_key_press",
//                 "header_symbol_search",
//                 "popup_hints",
//             ],
//             // eslint-disable-next-line
//             // @ts-ignore
//             custom_formatters: {
//                 priceFormatterFactory: () => {
//                     return {
//                         format: (price) => {
//                             return formatPrice(price);
//                         },
//                     };
//                 },
//             },
//             charts_storage_url: defaultProps.chartsStorageUrl,
//             charts_storage_api_version: defaultProps.chartsStorageApiVersion,
//             client_id: defaultProps.clientId,
//             user_id: userId ? userId : undefined,
//             fullscreen: defaultProps.fullscreen,
//             autosize: defaultProps.autosize,
//             studies_overrides: defaultProps.studiesOverrides,
//             theme: "Light",
//             loading_screen: {
//                 backgroundColor: COLORS.BKG1["Light"],
//             },
//             overrides: {
//                 timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
//                 ...chartStyleOverrides,
//             },
//         };
//
//         console.log("creating new chart");
//         const tvWidget = new widget(widgetOptions);
//         tvWidget.onChartReady(() => {
//             tvWidgetRef.current = tvWidget;
//             setChartReady(true);
//         });
//     }, [defaultProps, userId]);
//
//     return (
//         <div>
//             <div
//                 id={defaultProps.container as string}
//                 className="tradingview-chart"
//                 style={{height: "65vh", margin: "100px auto"}}
//             />
//         </div>
//     )
// }
//
// export const TradeAdvancedPage = () => {
//     const [tradeLayout] = useLocalStorageState<TradeLayout>(
//         TRADE_LAYOUT_KEY,
//         "chartLeft"
//     );
//     const [isCollapsed] = useLocalStorageState(SIDEBAR_KEY, false);
//
//     const minPageHeight = 1000;
//     const marketHeaderHeight = 48;
//     const totalCols = 24;
//     const uiLocked = false;
//
//     const innerHeight = minPageHeight;
//
//     const gridBreakpoints = useMemo(() => {
//         const sidebarWidth = isCollapsed ? 64 : 200;
//         return {
//             md: breakpoints.md - sidebarWidth,
//             lg: breakpoints.lg - sidebarWidth,
//             xl: breakpoints.xl - sidebarWidth,
//             xxl: breakpoints["2xl"] - sidebarWidth,
//             xxxl: breakpoints["3xl"] - sidebarWidth,
//         };
//     }, [isCollapsed]);
//
//     const defaultLayouts: ReactGridLayout.Layouts = useMemo(() => {
//         const chartXPos = {
//             chartLeft: { xxxl: 4, xxl: 4, xl: 4, lg: 5 },
//             chartMiddleOBRight: { xxxl: 4, xxl: 5, xl: 5, lg: 5 },
//             chartMiddleOBLeft: { xxxl: 4, xxl: 4, xl: 5, lg: 5 },
//             chartRight: { xxxl: 9, xxl: 9, xl: 10, lg: 11 },
//         };
//
//         return {
//             xxxl: [
//                 {
//                     i: "market-header",
//                     x: 0,
//                     y: 0,
//                     w: 24,
//                     h: marketHeaderHeight,
//                 },
//                 {
//                     i: "tv-chart",
//                     x: chartXPos[tradeLayout].xxxl,
//                     y: 1,
//                     w: 16,
//                     h: 640,
//                 },
//             ],
//             xxl: [
//                 {
//                     i: "market-header",
//                     x: 0,
//                     y: 0,
//                     w: 24,
//                     h: marketHeaderHeight,
//                 },
//                 {
//                     i: "tv-chart",
//                     x: chartXPos[tradeLayout].xxl,
//                     y: 1,
//                     w: 15,
//                     h: 552,
//                 },
//             ],
//             xl: [
//                 {
//                     i: "market-header",
//                     x: 0,
//                     y: 0,
//                     w: 24,
//                     h: marketHeaderHeight,
//                 },
//                 {
//                     i: "tv-chart",
//                     x: chartXPos[tradeLayout].xl,
//                     y: 1,
//                     w: 15,
//                     h: 552,
//                 },
//             ],
//             lg: [
//                 {
//                     i: "market-header",
//                     x: 0,
//                     y: 0,
//                     w: 24,
//                     h: marketHeaderHeight,
//                 },
//                 {
//                     i: "tv-chart",
//                     x: chartXPos[tradeLayout].lg,
//                     y: 1,
//                     w: 20,
//                     h: 552,
//                 },
//             ],
//             md: [
//                 {
//                     i: "market-header",
//                     x: 0,
//                     y: 0,
//                     w: 24,
//                     h: marketHeaderHeight,
//                 },
//                 { i: "tv-chart", x: 0, y: 1, w: 17, h: 464 },
//             ],
//         };
//     }, [innerHeight, tradeLayout]);
//
//     const [layouts, setLayouts] = useState<Layouts>(defaultLayouts);
//     const [breakpoint, setBreakpoint] = useState("");
//
//     const handleLayoutChange = useCallback(
//         (layout: Layout[] | undefined, layouts: Layouts) => {
//             setLayouts(layouts);
//         },
//         [setLayouts]
//     );
//
//     useLayoutEffect(() => {
//         handleLayoutChange(undefined, defaultLayouts);
//     }, [breakpoint, tradeLayout]);
//
//     return (
//         <div>
//             <ResponsiveGridLayout
//                 layouts={layouts}
//                 breakpoints={gridBreakpoints}
//                 onBreakpointChange={(bp: string) => setBreakpoint(bp)}
//                 cols={{
//                     xxxl: totalCols,
//                     xxl: totalCols,
//                     xl: totalCols,
//                     lg: totalCols,
//                     md: totalCols,
//                     sm: totalCols,
//                 }}
//                 rowHeight={1}
//                 isDraggable={!uiLocked}
//                 isResizable={!uiLocked}
//                 containerPadding={[0, 0]}
//                 margin={[0, 0]}
//                 useCSSTransforms
//                 onLayoutChange={handleLayoutChange}
//             >
//                 <div
//                     key="tv-chart"
//                     className="h-full border border-x-0 border-th-bkg-3"
//                 >
//                     <div className="relative h-full overflow-auto">
//                         <TradingViewChart />
//                     </div>
//                 </div>
//             </ResponsiveGridLayout>
//         </div>
//     );
// };