import style from "./Header.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../store/appStore";
import {ColorThemeSwitcher} from "./ColorThemeSwitcher/ColorThemeSwitcher";
import {svgIcons} from "../../assets/svgIcons";
import {ButtonCustom, VariantEnum} from "../_common/ButtonCustom/ButtonCustom";
import {IconButton} from "../_common/IconButton/IconButton";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {WalletDropDown} from "./WalletDropDown/WalletDropDown";
import {TwitterDropDown} from "./TwitterDropDown/TwitterDropDown";
import {Notifications} from "./Notifications/Notifications";
import {Search} from "./Search/Search";
import {Fragment, useState} from "react";
import {CreateNewToken} from "../C_Modals/CreateNewToken/CreateNewToken";

export const Header = observer(() => {
    const {
        appStore: {
            menu, setMenu,
            colorTheme,
            setShowConnectWallet,
            walletAddress,
        }
    } = useStore();

    const {pathname} = useLocation();
    const liveDataActive = false;
    const navigate = useNavigate();

    const onSearchIconButton = () => {
        navigate("/search")
    }

    const [createNewTokenModal, setCreateNewTokenModal] = useState(false)

    return (
        <header className={clsx({
            [style.header]: true,
            [style.header_light]: colorTheme === ColorThemeEnum.light,
        })}>

            <CreateNewToken showModal={createNewTokenModal}
                            onClose={() => setCreateNewTokenModal(false)}
            />

            <Link className={clsx(style.logo, style.borderRight)}
                  to="/"
            >
                {svgIcons.logo_short}
            </Link>

            {
                pathname !== "/search" && (
                    <IconButton icon={menu ? svgIcons.close : svgIcons.bars}
                                className={clsx(style.menuBtn, style.borderRight)}
                                onClick={() => setMenu(!menu)}
                    />
                )
            }


            {
                pathname !== "/" && (
                    <div className={clsx(style.backToList, style.borderRight)}>
                        {svgIcons.arrow_left}
                        <span>BACK TO LIST</span>
                    </div>
                )
            }

            <div className={style.searchDesktop}>
                <Search/>
            </div>

            {
                pathname !== "/search" && (
                    <div className={clsx({
                        [style.live]: true,
                        [style.live_active]: liveDataActive,
                    }, style.borderRight)}>
                        <div className={style.dot}/>
                        <p>
                            {liveDataActive ? "LIVE DATA ACTIVE" : "LIVE DATA NOT ACTIVE"}
                        </p>
                    </div>
                )
            }


            {
                pathname !== "/search" && (
                    <ColorThemeSwitcher/>
                )
            }


            <div className={clsx({
                [style.searchMobile]: true,
                [style.searchMobile_searchPage]: pathname === "/search",
            })}>
                {
                    pathname !== "/search" ? (
                        <IconButton icon={svgIcons.search}
                                    className={style.searchIconButton}
                                    onClick={onSearchIconButton}
                        />
                    ) : (
                        <>
                            <IconButton icon={svgIcons.arrow_left}
                                        className={style.backToHomeBtn}
                                        onClick={() => navigate("/")}
                            />
                            <Search/>
                        </>

                    )
                }
            </div>


            {
                pathname !== "/search" && (
                    <Notifications/>
                )
            }

            {
                pathname !== "/search" && (
                    <>
                        {
                            walletAddress ? (
                                <>
                                    <WalletDropDown/>
                                    <TwitterDropDown/>
                                </>

                            ) : (
                                <ButtonCustom label="CONNECT WALLET"
                                              className={clsx(style.connectWalletBtn, style.borderRight)}
                                              onClick={() => setShowConnectWallet(true)}
                                />
                            )

                        }
                    </>
                )
            }

            {
                pathname !== "/search" && (
                    <ButtonCustom label="Create New Coin"
                                  variant={VariantEnum.contained}
                                  className={style.createNewCoinBtn}
                                  onClick={() => setCreateNewTokenModal(true)}
                    />
                )
            }

        </header>
    )
})