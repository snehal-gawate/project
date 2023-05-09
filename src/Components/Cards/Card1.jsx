import React from "react";
import { CameraAltOutlined, Check, Clear, DragIndicatorOutlined, 
    DriveFileRenameOutlineOutlined,EventNoteOutlined, ExpandLess,
    ExpandMore, FmdGoodOutlined, MarkunreadOutlined, MoreHorizOutlined,
     PhoneOutlined } from "@mui/icons-material";
import { Box, Card, Stack, Typography,Avatar,Button, AvatarGroup,Autocomplete,
    TextField,List,ListItemText,Divider} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';
import {StyledTypo} from "../Styled";
import { StyledBox } from "../Styled";


const menu = [
    { title: 'Design' },
    { title: 'Home decorator' },
    { title: 'Bathroom remodelling' },
    { title: 'Home cleaning' },
] 

export const Card1=()=>{
    const theme = useTheme();
    return(
        <Box>
          <Card sx={{width:180+'vh',marginTop:2+'vh'}}>
           <Stack direction="row" padding={1}>
            <Card sx={{height:108+'px',width:110+'px',bgcolor:"#ff8a80",textAlign:"left"}}>
             <DragIndicatorOutlined/>
             <Typography padding={1} variant="subtitle2" fontWeight="bold">
                Mar 8,2023
                8:00 Am <br/>
                Next follow-up
             </Typography>
            </Card>

            <Box sx={{marginLeft:2+'vh'}}>

                <Stack direction="row">
                <Typography variant="h6">Leslie Alexander
                  </Typography>
                <StyledTypo variant="subtitle1"
                 sx={{marginLeft:2+'vh'}}>
                    2589621</StyledTypo>
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
                <Button endIcon={<ExpandLess/>} 
                sx={{fontWeight:"bold"}}>
                    show Less</Button>
                <Typography variant="subtitle2"
                sx={{marginTop:1+"vh",marginLeft:2+'vh',  opacity: 0.5}}
                >updated 1 sec ago</Typography>
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
            <CircularProgress value={75} variant="determinate" size={20}/> <Typography
            sx={{fontWeight:"bold"}}>75%</Typography>
            </Stack>
          </StyledBox>

          <StyledBox >
            <StyledTypo>SALES REP</StyledTypo>
            <AvatarGroup max={2}>
            <Avatar src="https://thumbs.dreamstime.com/z/young-man-portrait-18441696.jpg"/>
            <Avatar src="https://th.bing.com/th/id/OIP.RVA1zEOSn7ppWIjRmORi3gHaIf?pid=ImgDet&rs=1"/>
          </AvatarGroup>
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
           
           <Stack direction="row" spacing={5} sx={{textAlign:"left"}} padding={2}> 
           <Box>
            <Typography>ADD TAGS</Typography>

            <Autocomplete
             sx={{ width: 310 }}
             multiple
             options={menu}
             getOptionLabel={(option) => option.title}
             renderInput={(params) => (
              <TextField
                {...params}
           />
         )}
        />
        <Stack direction="row" mt={3}>
        <Typography >Suggested :</Typography>
        <Button variant="outlined" sx={{marginLeft:2+'vh',bgcolor:theme.palette.grey[200]}}
         color="inherit">Home decorator</Button>
        </Stack>
         </Box>
         
           <Box>
            <Stack direction="column" spacing={2}>
            <Typography>ADD NOTES</Typography>
            <TextField
          id="outlined-multiline-static"
          multiline sx={{width:60+'vh'}}
          rows={3}
          defaultValue="Add Project notes..."
        />
        <Button color="success" startIcon={<Check/>} endIcon={<Clear/>}
        sx={{bgcolor:theme.palette.grey[300],width:45+'vh',color:"#1b5e20"
        ,fontWeight:"bold"}} size="small" 
        >All changes saved one sec ago</Button>
          </Stack>
           </Box>

        <Box >
        <Stack direction="row" spacing={4} sx={{marginTop:4+'vh'}}>
         <List>
            <ListItemText secondary={"Company Labor costs"}/>
            <ListItemText secondary={"Company material costs"}/>
            <ListItemText secondary={"other company costs"}/>
         </List>
         <List >
            <ListItemText primary={"$6,400.00"} />
            <ListItemText primary={"$6,400.00"}/>
            <ListItemText primary={"$6,400.00"}/>
         </List>
         <List>
            <ListItemText primary={"42%"}/>
            <ListItemText primary={"42%"}/>
            <ListItemText primary={"42%"}/>
         </List>
      </Stack>
      <Divider/>
      <Stack direction="row" spacing={3}>
      <Typography>Estimate gross profit</Typography>
      <Typography fontWeight="bold">$6,400.00</Typography>
      <Typography>Markup <br/> 42%</Typography>
      <Typography>Margin <br/> 140%</Typography>
      </Stack>
        </Box>
           </Stack>

          </Card>
        </Box>
    )
}
 