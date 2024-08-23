import style from "./Chat.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {FormikHelpers, useFormik} from "formik";
import {comments} from "./data";
import {IconButton} from "../../_common/IconButton/IconButton";
import {useState} from "react";
import {clsx} from "clsx";

interface IValues {
    yourComment: string
}

export const Chat = () => {

    const initialValues: IValues = {
        yourComment: "",
    }
    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            console.log(values);
        } catch (e: any) {
            console.log(e.message)
        } finally {
            formikHelpers.resetForm();
        }
    }
    const formik = useFormik({
        initialValues,
        onSubmit: onSubmit,

    })

    const [expandChat, setExpandChat] = useState(false);


    return (
        <div className={clsx({
            [style.chat]: true,
            [style.chat_expand]: expandChat,
        })}>
            <div className={style.title}>
                CHAT
            </div>

            <div className={style.header}>
                <div className={style.headerLeft}>
                    <p>CHAT</p>
                    <p>TWITTER</p>
                </div>
                <div className={style.headerRight}>
                    {svgIcons.eye}
                    <span>1.2k</span>
                    <div className={style.icon}>
                        {svgIcons.eyeCross}
                    </div>
                </div>

                <button className={clsx({
                    [style.expandBtn]: true,
                    [style.expandBtn_expand]: expandChat,
                })}
                        onClick={() => setExpandChat(!expandChat)}
                >
                    {svgIcons.right}
                </button>
            </div>

            <div className={style.comments}>
                {
                    [
                        ...comments,
                        ...comments,
                        ...comments,
                        ...comments,
                    ].map(({src, name, text}, key) => (
                        <div key={key}
                             className={style.comment}
                        >
                            <div className={style.commentHeader}>
                                <div className={style.left}>
                                    <img src={src} alt=""/>
                                    <p>{name}</p>
                                </div>
                                <IconButton icon={svgIcons.more}
                                            className={style.moreBtn}
                                />
                            </div>
                            <p className={style.text}>
                                {text}
                            </p>
                            <div className={style.items}>
                                {
                                    [
                                        {
                                            icon: svgIcons.chatIcon0,
                                            value: 51
                                        },
                                        {
                                            icon: svgIcons.chatIcon1,
                                            value: 12
                                        },
                                        {
                                            icon: svgIcons.chatIcon2,
                                            value: 9
                                        },
                                    ].map(({icon, value}, key) => (
                                        <div key={key}
                                             className={style.item}
                                        >
                                            {icon}<span>{value}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={style.itemsTime}>
                                <div className={style.left}>
                                    <div className={style.item}>
                                        {svgIcons.chatIcon3}<span>{2}</span>
                                    </div>
                                    <div className={style.item}>
                                        {svgIcons.chatIcon4}{svgIcons.plus}
                                    </div>
                                </div>
                                <p className={style.time}>15:34</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <form onSubmit={formik.handleSubmit}
                  className={style.form}
            >
                <div className={style.fieldWrapper}>
                    <input type="text"
                           placeholder="Your comment"
                           {...formik.getFieldProps('inviteCode')}
                    />
                    <button className={style.btn}>
                        {svgIcons.faceThinking}
                    </button>
                    <button className={style.btn}>
                        <span>GIF</span>
                    </button>
                </div>
                <button type="submit"
                        className={style.submitBtn}
                >
                    <span>SEND</span>
                </button>
            </form>


        </div>
    )
}