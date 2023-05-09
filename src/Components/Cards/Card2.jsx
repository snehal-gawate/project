import React from "react";
import { CameraAltOutlined, DragIndicatorOutlined, DriveFileRenameOutlineOutlined, 
  EventNoteOutlined, ExpandMore, FmdGoodOutlined,
     MarkunreadOutlined, MoreHorizOutlined, PhoneOutlined } from "@mui/icons-material";
import { Box, Card, Stack, Typography,Avatar,Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';
import {StyledTypo} from "../Styled";
import { StyledBox } from "../Styled";

export const Card2=()=>{
    const theme = useTheme();
    return(
        <Box>
          <Card sx={{height:120+'px',width:180+'vh',marginTop:5+'vh'}}>
           <Stack direction="row" padding={1}>
            <Card sx={{height:108+'px',width:110+'px',bgcolor:"#90caf9",textAlign:"left"}}>
             <DragIndicatorOutlined/>
             <Typography padding={1}>
                No follow-up scheduled
             </Typography>
            </Card>

            <Box sx={{marginLeft:2+'vh'}}>

                <Stack direction="row">
                <Typography variant="h6">Esther Howard  
                  </Typography>
                <StyledTypo variant="subtitle1"
                 sx={{marginLeft:2+'vh'}}>
                    2589632</StyledTypo>
                </Stack>

                <Stack direction="row">
                <Avatar sx={{bgcolor:theme.palette.grey[100]}}
                 variant="rounded">
                  <PhoneOutlined sx={{color:"black"}}/>
                </Avatar>
                <Avatar 
                sx={{bgcolor:theme.palette.grey[100],marginLeft:2+'vh'}} 
                variant="rounded">
                    <MarkunreadOutlined sx={{color:"black"}}/>
                </Avatar>
                <Avatar 
                sx={{bgcolor:theme.palette.grey[100],marginLeft:2+'vh'}} 
                variant="rounded">
                    <FmdGoodOutlined sx={{color:"black"}}/>
                </Avatar>
                </Stack>
                
                <Stack direction="row" >
                <Button endIcon={<ExpandMore/>} color="inherit" 
                sx={{fontWeight:"bold"}}>
                    show more</Button>
                <Typography variant="subtitle2"
                sx={{marginTop:1+"vh",marginLeft:2+'vh',  opacity: 0.5}}
                >updated 4 hour ago</Typography>
                </Stack>
            </Box>

          <Box sx={{textAlign:"left",marginLeft:15+'vh'}}>
            <StyledTypo >PROJECT INFO</StyledTypo>
            <Button  variant="outlined" endIcon={<ExpandMore/>}
             color="inherit" size="small"
                sx={{fontWeight:"bold",marginTop:1+'vh'}}>
                    BATHROOM MODELLING</Button>
          </Box>
          
        <Box >
          <Stack direction="column">
            <Box>
              <Stack direction="row">
          <StyledBox >
            <StyledTypo >EST,REVENUE</StyledTypo>
            <Typography sx={{fontWeight:"bold"}}>$90,000.00</Typography>
          </StyledBox>

          <StyledBox >
            <StyledTypo >LIKELIHOOD OF SALE</StyledTypo>
            <Stack direction="row" spacing={1}>
            <CircularProgress value={45}  variant="determinate" size={20}/>
             <Typography
            sx={{fontWeight:"bold"}}>45%</Typography>
            </Stack>
          </StyledBox>

          <StyledBox >
            <StyledTypo>SALES REP</StyledTypo>
            <Avatar src="https://th.bing.com/th/id/OIP.88hQwxL9ILYl7PV_HXgWqgHaE8?pid=ImgDet&rs=1"/>
          </StyledBox>
          </Stack>
          </Box>
          <Box>
            <Stack direction="row">
            <Button endIcon={<ExpandMore/>} color="inherit" 
                sx={{fontWeight:"bold",marginTop:1+'vh',marginLeft:8+'vh'}}>
                    RECORD COMMUNICATIONS</Button>

            <StyledBox sx={{marginTop:2+'vh'}}>
              <Stack direction="row" spacing={2} sx={{opacity:0.8}}>
              <CameraAltOutlined/>
               <EventNoteOutlined/>
               <DriveFileRenameOutlineOutlined/>
               <DragIndicatorOutlined/>
               <MoreHorizOutlined/>
               </Stack>
            </StyledBox>
            </Stack>
          </Box>
          </Stack>
          </Box>
         </Stack>
           
          </Card>
        </Box>
    )
}