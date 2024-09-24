import style from "./HomePage.module.scss"
import {Trending} from "./Trending/Trending";
import {ControlPanel} from "./ControlPanel/ControlPanel";
import {Tokens} from "./Tokens/Tokens";
import {SpinAndWin} from "../C_Modals/SpinAndWin/SpinAndWin";
import {AnnouncementBar} from "./AnnouncementBar/AnnouncementBar";
import {ClaimModal} from "../C_Modals/ClaimModal/ClaimModal";
import {AddCelebrity} from "./AddCelebrity/AddCelebrity";
import {DepositedSolana} from "../C_Modals/DepositedSolana/DepositedSolana";

export const HomePage = () => {
    return (
        <div className={style.homePage}>
            <SpinAndWin/>
            <DepositedSolana/>
            <ClaimModal/>
            <AnnouncementBar/>
            <Trending/>
            <AddCelebrity/>
            <ControlPanel/>
            <Tokens/>
        </div>
    )
}