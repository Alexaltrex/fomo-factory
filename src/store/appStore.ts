import {action, makeObservable, observable} from "mobx";
import {CelebsRefered} from "../components/C_Modals/CelebsRefered/CelebsRefered";
import {HowToPlay} from "../components/C_Modals/HowToPlay/HowToPlay";
import {favoriteSingles, IFavorite} from "../components/A2_Sidebar/data";

export enum ColorThemeEnum  {
    dark = "dark",
    light = "light"
}

export enum ViewModeEnum {
    list = "list",
    grid = "grid"
}

export class AppStore {
    address = null as null | string
    twitter = null as null | string
    colorTheme = ColorThemeEnum.dark
    confirmed = false
    viewMode = ViewModeEnum.list
    showConnectWallet = false
    walletAddress = null as null | string
    menu = false
    shareModal = false
    celebsReferedModal = false
    howToPlayModal = false

    favoriteSingles = favoriteSingles as IFavorite[]

    constructor() {
        makeObservable(this,
            {
                address: observable,
                twitter: observable,
                colorTheme: observable,
                confirmed: observable,
                viewMode: observable,
                showConnectWallet: observable,
                walletAddress: observable,
                menu: observable,
                shareModal: observable,
                celebsReferedModal: observable,
                howToPlayModal: observable,
                favoriteSingles: observable,

                setAddress: action.bound,
                setTwitter: action.bound,
                setColorTheme: action.bound,
                setConfirmed: action.bound,
                setViewMode: action.bound,
                setShowConnectWallet: action.bound,
                setWalletAddress: action.bound,
                setMenu: action.bound,
                setShareModal: action.bound,
                setCelebsReferedModal: action.bound,
                setHowToPlayModal: action.bound,

            }
        )
    }

    setAddress(address: string) {
        this.address = address;
    }

    setTwitter(twitter: string) {
        this.twitter = twitter;
    }

    setColorTheme(colorTheme: ColorThemeEnum) {
        this.colorTheme = colorTheme;
    }

    setConfirmed(confirmed: boolean) {
        this.confirmed = confirmed;
    }

    setViewMode(viewMode: ViewModeEnum) {
        this.viewMode = viewMode
    }

    setShowConnectWallet(showConnectWallet: boolean) {
        this.showConnectWallet = showConnectWallet
    }

    setWalletAddress(walletAddress: string | null) {
        this.walletAddress = walletAddress
    }

    setMenu(menu: boolean) {
        this.menu = menu
    }

    setShareModal(shareModal: boolean) {
        this.shareModal = shareModal
    }

    setCelebsReferedModal(celebsReferedModal: boolean) {
        this.celebsReferedModal = celebsReferedModal
    }

    setHowToPlayModal(howToPlayModal: boolean) {
        this.howToPlayModal = howToPlayModal
    }

}