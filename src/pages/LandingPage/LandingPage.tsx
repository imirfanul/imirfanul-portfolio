import React, { useState } from "react";
import style from "./landing-page.module.css";
import { Box, Button, Typography } from "@mui/material";
import DpLogo from "../../components/DpLogo/DpLogo";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const [startTadaAnimation, setStartTadaAnimation] = useState(false);
    const navigate = useNavigate();
    const onHoverExplorMe = () => {
        setStartTadaAnimation(!startTadaAnimation);
    };
    return (
        <>
            <Box className={style.overlay} />
            <Box className={style.root_container}>
                <Box className={style.navbar}>
                    <Box className={style.nav_items}>
                        <Typography
                            component="a"
                            className={style.nav_item}
                        >
                            Portfolio
                        </Typography>
                        <Typography   onClick={() => navigate("/about")} component="a" className={style.nav_item}>
                            About & Skills
                        </Typography>
                        <Typography component="a" className={style.nav_item}>
                            Profiles
                        </Typography>
                    </Box>
                </Box>
                <Box className={style.container}>
                    <DpLogo className={style.dp_logo} />
                    <Typography className={style.short_bio}>
                        Student | Developer | Contributor
                    </Typography>
                    <Typography className={style.quote}>
                        Life is Binarry between Zero and One.
                    </Typography>
                    <Box className={style.name}>
                        <Typography className={style.name}>Md Irfanul Alam</Typography>
                        <Box className={style.strip} />
                    </Box>

                    <Box
                        component="span"
                        onMouseEnter={onHoverExplorMe}
                        className={startTadaAnimation ? style.tada_animation : ""}
                    >
                        <Button className={style.special_btn}>
                            <span>Explore Me</span>
                        </Button>
                    </Box>
                    <Box className={style.stick}>
                        <Box className={style.stick_design} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default LandingPage;
