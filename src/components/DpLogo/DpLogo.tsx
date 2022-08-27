import { Box } from "@mui/material";
import React from "react";
import style from "./dp-logo.module.css";
import Dp from "../../assets/img/Profile-Pic-6.jpg";
import DpLogoInterface from "../../Interfaces/DpLogoInterface";

const DpLogo = (props: DpLogoInterface) => {
    const { className } = props;
    return (
        <Box className={className}>
            <Box className={style.profile_logo}>
                <img src={Dp} alt="my pic" />
            </Box>
        </Box>
    );
};

export default DpLogo;
