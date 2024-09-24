import style from "./AddCelebrity.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";

export const AddCelebrity = observer(() => {
    const {
        appStore: {
            setCreateNewTokenModal
        }
    } = useStore()

    return (
        <button className={style.addCelebrity}
                onClick={() => setCreateNewTokenModal(true)}
        >
            <p>
                Can't find your fav celebrity? <span>Add them here </span>
            </p>
        </button>
    )
})