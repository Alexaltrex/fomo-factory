import style from "./HomePage.module.scss"
import {Trending} from "./Trending/Trending";
import {ControlPanel} from "./ControlPanel/ControlPanel";
import {Tokens} from "./Tokens/Tokens";

export const HomePage = () => {
    return (
        <div className={style.homePage}>
            <Trending/>
            <ControlPanel/>
            <Tokens/>
        </div>
    )
}