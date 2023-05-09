import React from "react";
import { Box,Card,List,Avatar,ListItemAvatar,ListItem, Divider, Typography } from "@mui/material";
import {Sidebarmenu} from "./Sidebarmenu";
import { useTheme } from '@mui/material';



export const Sidebar=()=>{
    const theme = useTheme();
    return(
        <div>
           <Card sx={{height:160+'vh',bgcolor:theme.palette.grey[200]}}>
            <Sidebarmenu />
                <Divider sx={{marginTop:20+'vh'}}/>
                <List >
                   <ListItem>
                    <ListItemAvatar>
                  <Avatar src="https://th.bing.com/th/id/OIP.88hQwxL9ILYl7PV_HXgWqgHaE8?pid=ImgDet&rs=1"/>
                    </ListItemAvatar>
                 <Typography variant="h6">Jacob Jones</Typography>
                   </ListItem>
                </List>
            </Card> 
        </div>
    )
}