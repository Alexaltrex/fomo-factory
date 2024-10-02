import style from "./OwnerPanel.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import {ButtonCustom, VariantEnum} from "../_common/ButtonCustom/ButtonCustom";
import React, {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {clsx} from "clsx";
import Slider from '@mui/material/Slider';
import {icons} from "../C_Modals/ConnectWallet/icons";
import {useOutsideButNotOnTargetClick} from "../../hooks/useOutsideClick";
import {FormikHelpers, useFormik} from "formik";

interface IValues {
    address: string
}

const initialValues: IValues = {
    address: "",
}


export const OwnerPanel = () => {
    const [claimClicked, setClaimClicked] = useState(false);
    const [tab, setTab] = useState(0)

    const [value, setValue] = useState(30);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    const [openDropDown, setOpenDropDown] = useState(false);
    const [charity, setCharity] = useState("");
    const ref = useRef<HTMLDivElement>(null!);
    const targetRef = useRef<HTMLButtonElement>(null!);
    useOutsideButNotOnTargetClick(ref, targetRef, () => setOpenDropDown(false))

    const navigate = useNavigate();

    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            console.log(values.address);
            navigate("/ownerAfterLaunch");

        } catch (e: any) {
            console.log(e.message)
        } finally {
            formikHelpers.resetForm();
        }
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
    })

    return (
        <div className={style.ownerPanel}>

            <div className={style.logoWrapper}>
                {svgIcons.logo_full}
            </div>

            <p className={style.label}>
                Total DEPOSITED
            </p>

            <p className={style.value}>
                $200,355
            </p>

            <p className={style.description}>
                Hey ABC! your fans are interested in you launching social token. Claim 20% of the pot and launch your
                social token.
            </p>

            {
                !claimClicked ? (
                    <>
                        <ButtonCustom label="Claim $40,000"
                                      variant={VariantEnum.contained}
                                      className={style.claimBtn}
                                      onClick={() => setClaimClicked(true)}
                        />

                        <div className={style.socialLinks}>
                            {
                                [
                                    {
                                        icon: svgIcons.telegram,
                                        href: "#",
                                    },
                                    {
                                        icon: svgIcons.x_outlined,
                                        href: "#",
                                    },
                                ].map(({icon, href}, key) => (
                                    <a key={key}
                                       href={href}
                                       target="_blank"
                                       rel="nofollow noopener noreferrer"
                                       className={style.socialLink}
                                    >
                                        {icon}
                                    </a>
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <div className={style.card}>

                        <p className={style.cardHeader}>
                            How to claim?
                        </p>

                        <div className={style.wrapper}>

                            <p className={style.desc}>
                                Below you will find instructions on “How to play?”. If you have any questions, you
                                can <Link to="/">ask for help</Link>
                            </p>

                            <div className={style.tweetSection}>
                                {
                                    [
                                        {
                                            label: "Tweet",
                                            descrition: <><span>Tweet verification code</span> for at least 5 mins</>
                                        },
                                        {
                                            label: "connect twitter",
                                            descrition: <><span>Login and connect</span> your twitter</>
                                        },
                                    ].map(({label, descrition}, key) => (
                                        <button key={key}
                                                className={clsx({
                                                    [style.button]: true,
                                                    [style.button_selected]: key === tab,
                                                })}
                                                onClick={() => setTab(key)}
                                        >
                                            <p>
                                                {label}
                                            </p>
                                            <p>
                                                {descrition}
                                            </p>
                                        </button>
                                    ))
                                }
                                <p className={style.or}>OR</p>


                            </div>

                            <p className={style.sliderLabel}>
                                How Much do you want to donate?
                            </p>

                            <div className={style.sliderWrapper}>

                                <Slider aria-label="Volume"
                                        value={value} onChange={handleChange}
                                        min={0}
                                        max={100}
                                        marks={false}
                                        sx={{
                                            height: "9px",
                                            borderRadius: 0,
                                            padding: 0,
                                            color: "#ff3d00",
                                            "& .MuiSlider-track": {
                                                color: "#d3f932",
                                            },
                                            "& .MuiSlider-rail": {
                                                color: "#ff3d00",
                                                opacity: 1,
                                            },
                                            "& .MuiSlider-thumb": {
                                                width: "16px",
                                                height: "16px",
                                                backgroundColor: "#09090a",
                                                border: "1px solid #d3f932",
                                                "&:hover": {
                                                    boxShadow: "none"
                                                },
                                            }
                                        }}
                                />

                                <div className={style.marks}>
                                    {
                                        ["$0", "$20K", "$40", "$60", "$80", "$100"].map((mark, key) => (
                                            <p key={key}
                                               className={clsx({
                                                   [style.mark]: true,
                                                   [style.mark_selected]: value >= key * 20,
                                               })}
                                               style={{
                                                   left: `${20 * key}%`
                                               }}
                                            >
                                                {mark}
                                            </p>
                                        ))
                                    }
                                </div>

                            </div>

                        </div>

                        <div className={style.charitySection}>
                            <p>
                                <span>Charity</span>{svgIcons.info}
                            </p>
                            <p>${value}K</p>
                        </div>

                        <div className={style.selectCharity}>
                            <div className={style.icon}>
                                {svgIcons.hand_dollar}
                            </div>

                            <div className={style.select}>
                                <p className={style.charityValue}>
                                    {charity || "Select Charity"}
                                </p>

                                <div className={style.btnWrapper}>
                                    <button className={clsx({
                                        [style.btn]: true,
                                        [style.btn_open]: openDropDown,
                                    })}
                                            onClick={() => setOpenDropDown(!openDropDown)}
                                            ref={targetRef}
                                    >
                                        {svgIcons.left}
                                    </button>

                                    {
                                        openDropDown && (
                                            <div className={style.dropDown}
                                                 ref={ref}
                                            >
                                                {
                                                    [
                                                        {
                                                            icon: icons.metamask,
                                                            label: "I have my own charity"
                                                        },
                                                        {
                                                            icon: icons.phantom,
                                                            label: "Helen Keller"
                                                        },
                                                        {
                                                            icon: icons.exodus,
                                                            label: "Red Cross"
                                                        },
                                                        {
                                                            icon: icons.binance,
                                                            label: "UNICEF"
                                                        },
                                                    ].map(({icon, label}, key) => (
                                                        <button key={key}
                                                                className={style.dropDownItem}
                                                                onClick={() => {
                                                                    setOpenDropDown(false);
                                                                    setCharity(label);
                                                                }}
                                                        >
                                                            <div className={style.icon}>{icon}</div>
                                                            <p>{label}</p>
                                                            {key === 0 && svgIcons.info}
                                                        </button>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </div>


                            </div>
                        </div>

                        <div className={style.walletSection}>
                            <p>
                                <span>Your wallet</span>{svgIcons.info}
                            </p>
                            <p>
                                <span>${value}K + </span><span>$40K</span>
                            </p>
                        </div>

                        <div className={style.addressSection}>
                            <div className={style.icon}>
                                {svgIcons.wallet}
                            </div>

                            <form onSubmit={formik.handleSubmit}
                            >
                                <input type="text"
                                       placeholder="Your Wallet Address"
                                />

                                <ButtonCustom label="continue"
                                              type="submit"
                                              className={style.btn}
                                              variant={VariantEnum.contained}
                                />
                            </form>
                        </div>

                    </div>
                )
            }

        </div>
    )
}