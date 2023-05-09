import React from "react";
import {Add,Code} from "@mui/icons-material";
import {Toolbar,Typography,Button,Box} from "@mui/material";
export const Appbar=()=>{
    return(
        <div>
           <Box >
            <Toolbar>
                <Code/>
            <Typography sx={{marginLeft:2+'vh'}} >
                Lead Pipeline
            </Typography>
            <Button variant="contained" 
            startIcon={<Add />}
            sx={{marginLeft:150+'vh'}}
            size="small">
               Add
            </Button>
            </Toolbar>
            </Box>
        </div>
    )
}