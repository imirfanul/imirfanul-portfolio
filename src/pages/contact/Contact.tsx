import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SlideIn from "../../components/Animations/SlideIn";
import BackIcon from "../../components/BackIcon/BackIcon";
import style from "./contact.module.css";
import { clsx } from "clsx";
import { Profiles, Email, Work } from "../../database/Contact";
const Contact = () => {
    const navigate = useNavigate();
    return (
        <SlideIn duration={0.7}>
            <Box onClick={() => navigate("/")} className="back_icon">
                <BackIcon />
            </Box>
            <Box className={style.root}>
                <Box>
                    <Typography className={style.page_header}>CONTACT & PROFILES</Typography>
                </Box>
                <Box className={style.container}>
                    <Box className={clsx(`${style.part}`)}>
                        <Box className={clsx(`${style.section} ${style.icons} ${style.flex_1}`)}>
                            {Profiles.map((profile, index) => {
                                return (
                                    <Typography
                                        target="_blank"
                                        href={profile.url}
                                        component="a"
                                        className={clsx(`${style.img} ${style.icon}`)}
                                    >
                                        <img
                                            className={style.img}
                                            title={profile.name}
                                            src={profile.iconUrl}
                                            alt={profile.name}
                                        />
                                    </Typography>
                                );
                            })}
                        </Box>
                    </Box>
                    <Box className={clsx(`${style.part}`)}>
                        <Box className={clsx(`${style.section} ${style.min_section}`)}>
                            <Typography
                                target="_blank"
                                href={Email.url}
                                component="a"
                                className={clsx(`${style.img} ${style.icon}`)}
                            >
                                <img
                                    className={style.img}
                                    title={Email.name}
                                    src={Email.iconUrl}
                                    alt={Email.name}
                                />
                                <p >{ Email.url.replace("mailto:", "")}</p>
                            </Typography>
                        </Box>

                        <Box className={clsx(`${style.section} ${style.icons}`)}>
                            {Work.map((work, index) => {
                                return (
                                    <Typography
                                        target="_blank"
                                        href={work.url}
                                        component="a"
                                        className={clsx(`${style.img} ${style.icon}`)}
                                    >
                                        <img
                                            className={style.img}
                                            title={work.name}
                                            src={work.iconUrl}
                                            alt={work.name}
                                        />
                                    </Typography>
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </SlideIn>
    );
};

export default Contact;
