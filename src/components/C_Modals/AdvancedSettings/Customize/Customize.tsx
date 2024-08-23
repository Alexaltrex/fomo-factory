import style from "./Customize.module.scss"
import {useState} from "react";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {svgIcons} from "../../../../assets/svgIcons";
import {clsx} from "clsx";

export const Customize = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={style.customize}>

            <div className={style.header}>
                <p>
                    CUSTOMIZE
                </p>
                <IconButton icon={svgIcons.right}
                            onClick={() => setOpen(!open)}
                            className={clsx({
                                [style.openBtn]: true,
                                [style.openBtn_open]: open,
                            })}
                />
            </div>

            {
                open && (
                    <>
                        <p className={style.description}>
                            This feature allows you to personalize your Quick Sell buttons by pre-setting specific
                            percentage values, making it easier for you to execute trades with your preferred settings
                        </p>

                        <div className={style.btns}>
                            {
                                [0.25, 1, 5, 10].map((value, key) => (
                                    <button key={key}
                                            onClick={() => setOpen(false)}
                                    >
                                        <p className={style.value}>
                                            {value}
                                        </p>
                                        <div className={style.right}>
                                            {svgIcons.solana}<span>SOL</span>
                                        </div>
                                    </button>
                                ))
                            }
                        </div>


                    </>
                )
            }

        </div>
    )
}