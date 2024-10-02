import React from 'react';
import style from "./App.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {clsx} from "clsx";
import {Header} from "../A1_Header/Header";
import {ColorThemeEnum} from "../../store/appStore";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../B0_HomePage/HomePage";
import {useColorTheme} from "../../hooks/useColorTheme";
import {Sidebar} from "../A2_Sidebar/Sidebar";
import {ConnectWallet} from "../C_Modals/ConnectWallet/ConnectWallet";
import {Menu} from "../A2_Menu/Menu";
import {SearchPage} from "../B1_SearchPage/SearchPage";
import {LeaderboardPage} from "../B4_LeaderboardPage/LeaderboardPage";
import {TokenPageConfirmed} from "../B2_TokenPageConfirmed/TokenPageConfirmed";
import {Share} from "../C_Modals/Share/Share";
import {TokenPageUnconfirmed} from "../B3_TokenPageUnconfirmed/TokenPageUnconfirmed";
import {EditorPage} from "../B5_EditorPage/EditorPage";
import {HowToPlay} from "../C_Modals/HowToPlay/HowToPlay";
import {TransactionAlerts} from "../C_Modals/TransactionAlerts/TransactionAlerts";
import {CreateFolder} from "../C_Modals/CreateFolder/CreateFolder";
import {RenameFolder} from "../C_Modals/RenameFolder/RenameFolder";
import {DeleteFolder} from "../C_Modals/DeleteFolder/DeleteFolder";
import {OwnerPanel} from "../B6_OwnerPanel/OwnerPanel";
import {OwnerPanelAfterLaunch} from "../B7_OwnerPanelAfterLaunch/OwnerPanelAfterLaunch";

export const App = observer(() => {
    const {
        appStore: {
            colorTheme, setColorTheme,
            showConnectWallet,
        }
    } = useStore();

    useColorTheme(colorTheme, setColorTheme);

    return (
        <div className={clsx({
            [style.app]: true,
            [style.app_light]: colorTheme === ColorThemeEnum.light,
        })}>
            <Header/>
            <Menu/>
            <Share/>
            <HowToPlay/>
            <TransactionAlerts/>
            <CreateFolder/>
            <RenameFolder/>
            <DeleteFolder/>

            {
                showConnectWallet && <ConnectWallet/>
            }

            <main>
                <Sidebar/>
                <div className={style.content}>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/search' element={<SearchPage/>}/>
                        <Route path='/leaderboard' element={<LeaderboardPage/>}/>
                        <Route path='/tokenConfirmed/:tokenId' element={<TokenPageConfirmed/>}/>
                        <Route path='/tokenUnconfirmed/:tokenId' element={<TokenPageUnconfirmed/>}/>
                        <Route path='/editor' element={<EditorPage/>}/>
                        <Route path='/owner' element={<OwnerPanel/>}/>
                        <Route path='/ownerAfterLaunch' element={<OwnerPanelAfterLaunch/>}/>
                    </Routes>
                </div>
            </main>
        </div>
    );
})


