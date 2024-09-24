import style from "./AnnouncementBar.module.scss"
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {useStore} from "../../../store/rootStore";
import {convertToTwoDigit, getMins, getSecs} from "../../../helpers/time";

export const AnnouncementBar = observer(() => {
    const {
        appStore: {
            win, winValue, setClaimModal,
        }
    } = useStore()

    const dateEnd = new Date(new Date().getTime() + 10 * 60 * 1000);
    const [timeIsOver, setTimeIsOver] = useState(false);
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const time = new Date(dateEnd.getTime() - new Date().getTime()).getTime();
        if (time > 0 && !timeIsOver) {
            setTime(time);
            setStart(true);
        }
    }, []);

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (start) {
                if (time <= 60000) {
                    setTimeIsOver(true);
                    clearTimeout(timeId);
                } else {
                    setTime(time => time - 1000);
                }
            }
        }, 1000);
        return () => {
            clearTimeout(timeId);
        }
    }, [time]);

    return (
        <>
            {
                win && (
                    <button className={style.announcementBar}
                            onClick={() => setClaimModal(true)}
                    >
                        <p className={style.info}>
                            Claim your <span>{winValue}</span> before timer runs out
                        </p>

                        <p className={style.timer}>
                            {`${convertToTwoDigit(getMins(time))}:${convertToTwoDigit(getSecs(time))}`}
                        </p>
                    </button>
                )
            }
        </>

    )
})