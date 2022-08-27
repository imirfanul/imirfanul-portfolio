import { Box, Typography } from "@mui/material";
import React from "react";
import BackIcon from "../../components/BackIcon/BackIcon";
import DpLogo from "../../components/DpLogo/DpLogo";
import style from "./about.module.css";
import SkillList from "../../database/Skills";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SlideIn from "../../components/Animations/SlideIn";
const About = () => {
    const navigate = useNavigate();
    return (
        <SlideIn duration={0.7}>
            <Box onClick={() => navigate("/")} className="back_icon">
                <BackIcon />
            </Box>
            <Box className={style.overlay} />
            <Box className={style.container}>
                <Box className={style.side1}>
                    <Typography className={style.skill_header}>ABOUT</Typography>
                    <DpLogo className={style.dp_logo}></DpLogo>
                    <Box className={style.text_container}>
                        <Typography>
                            I started programming with C in 2016 (still I love C & *Pointer) then I
                            jumped to .NET & ASP.NET with C# for Web and Desktop App development and
                            now I am working with Node.js, ASP.NET Core, Angular, React.js, React
                            Native.
                        </Typography>
                        <br />
                        <Typography>
                            I've built few of extension for VSCode & Browsers which are downloaded
                            more than 1.2M times.
                        </Typography>
                        <br />
                        <Typography>
                            Apart from web development, I like IOT & play with Arduino,
                            ESP8266/NodeMCU.
                        </Typography>
                    </Box>
                </Box>
                <Box className={style.side2}>
                    <Box className={style.skill_container}>
                        <Typography component="h1" className={style.skill_header}>
                            Skills
                        </Typography>
                        {SkillList.map((skill, index) => {
                            return (
                                <>
                                    <Typography className={style.skill_type}>
                                        {skill.type}
                                    </Typography>
                                    <Typography className={style.skill_names}>
                                        {skill.names.join(", ")}
                                    </Typography>
                                </>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </SlideIn>
    );
};

export default About;
