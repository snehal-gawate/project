import React from "react";
import { Button } from "@mui/material";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";
import { Card3 } from "./Card3";
import { Card4 } from "./Card4";
import { useTheme } from '@mui/material/styles';
import {  ArrowForwardIos, EmojiObjectsOutlined } from "@mui/icons-material";

export const Home=()=>{
    const theme = useTheme();

    return(
        <div style={{textAlign:"left"}}>
            <Card1/>
            <Card2/>
            <Card3/>
            <Card4/>
            <Button
            variant="contained"
            color="inherit"
            startIcon={<EmojiObjectsOutlined color="primary"/>}
            endIcon={<ArrowForwardIos />}
            sx={{bgcolor:theme.palette.grey[200],mt:5+'vh'}}
            >Pro Tip and Guidence</Button>
        </div>
    )
}