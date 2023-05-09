import { Inventory2Outlined, PhoneForwardedOutlined, PlayArrow,CalendarMonthOutlined,HourglassEmptyOutlined,
   DriveFileRenameOutlineOutlined, ReplayOutlined, NearMeOutlined, HttpsOutlined, ThumbUpAltOutlined, 
   PauseOutlined, DeleteForeverOutlined, CheckBoxOutlined, ClearOutlined, HeightOutlined, CloudSyncOutlined,
   ArrowForwardIosOutlined} from "@mui/icons-material";
import { Box, Typography,Stack, Button,ListItem , ButtonGroup} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import React from "react";
import { MyListItemText ,ConicalButton } from "./Styled";


const menulist=[
  { Percent: '40%', days: '3 days' },
  { Percent: '70%', days: '12 days' },
  { Percent: '30%', days: '3 days' },
  { Percent: '40%', days: '3 days' },

  { Percent: '20%', days: '9 days' },
  { Percent: '20%', days: '8 days' },
  { Percent: '10%', days: '5 days' },
  { Percent: '10%', days: '8 days' },
]

const buttonmenu=[
  { icon: PauseOutlined, name: 'On hold' },
  { icon: DeleteForeverOutlined, name: 'Rejected' },
  { icon:CheckBoxOutlined, name: 'completed(20)' },
  { icon: ClearOutlined, name: 'cancled(1)' },
]

const buttonmenu2=[
  { icon: HeightOutlined, name: 'sort' },
  { icon: CloudSyncOutlined, name: 'filters' },
  { icon: CalendarMonthOutlined, name: 'sep 17-sep 21,2022' },
 ]

export const Head=()=>{

  const theme = useTheme();

    return(
        <Box sx={{marginLeft:5+'vh'}}>
            <Stack direction="row">
            <Typography variant="h5">
                Estimate to Sell
                </Typography>
            <Button variant="text"
            sx={{color:"black",marginLeft:5+'vh'}}
            startIcon={<PlayArrow/>}
            >TUTORIAL VEDIO</Button>
            </Stack>
             
          < Stack spacing={1} direction="row">
           <ButtonGroup variant="text" >

                 <ConicalButton sx={{bgcolor:theme.palette.grey[200]}}
                 startIcon={<Inventory2Outlined />} 
                 color="inherit"
                 >New 200</ConicalButton>
             <ArrowForwardIosOutlined 
             sx={{color:"#bdbdbd", fontSize: 30}} />

                 <ConicalButton sx={{bgcolor:theme.palette.grey[200]}}
                  color="inherit"
                 startIcon={<PhoneForwardedOutlined />}
                 >Contact 50</ConicalButton>
              <ArrowForwardIosOutlined 
             sx={{color:"#bdbdbd", fontSize: 30}} />
            
                 <ConicalButton sx={{bgcolor:theme.palette.grey[200]}}
                  color="inherit"
                 startIcon={<CalendarMonthOutlined />}
                 >Schedule 30</ConicalButton>
                 <ArrowForwardIosOutlined 
             sx={{color:"#bdbdbd", fontSize: 30}} />

                 <ConicalButton sx={{bgcolor:theme.palette.grey[200]}}
                  color="inherit"
                 startIcon={<HourglassEmptyOutlined />}
                 >Estimate 12</ConicalButton>
                  <ArrowForwardIosOutlined 
             sx={{color:"#bdbdbd", fontSize: 30}} />

                 <ConicalButton sx={{bgcolor:theme.palette.grey[200]}}
                  color="inherit"
                 startIcon={<DriveFileRenameOutlineOutlined />}
                 >White 15</ConicalButton>
                  <ArrowForwardIosOutlined 
             sx={{color:"#bdbdbd", fontSize: 30}} />

                 <ConicalButton sx={{bgcolor:theme.palette.grey[200]}}
                  color="inherit"
                 startIcon={<ReplayOutlined />}
                 >Revise 2</ConicalButton>
                  <ArrowForwardIosOutlined 
             sx={{color:"#bdbdbd", fontSize: 30}} />

                 <ConicalButton sx={{bgcolor:theme.palette.grey[200]}}
                  color="inherit"
                 startIcon={<NearMeOutlined />}
                 >Send 8</ConicalButton>
                  <ArrowForwardIosOutlined 
             sx={{color:"#bdbdbd", fontSize: 30}} />

                 <ConicalButton sx={{bgcolor:theme.palette.grey[200]}}
                  color="inherit"
                 startIcon={<HttpsOutlined />}
                 >Sell 10</ConicalButton>
                  <ArrowForwardIosOutlined 
             sx={{color:"#bdbdbd", fontSize: 30}} />

                 <ConicalButton sx={{bgcolor:theme.palette.grey[200]}}
                  color="inherit"
                 startIcon={<ThumbUpAltOutlined />}
                 >Soid 30</ConicalButton>
              </ButtonGroup>
        </Stack>  
          
        <Stack direction="row">
         {menulist.map((item) => (
                <ListItem key={item.Percent} >
                <MyListItemText primary={item.Percent} 
                secondary={item.days}/>
                </ListItem>
            ))}  
        </Stack>
      
      <Stack direction="row" sx={{marginBottom:2+'vh'}}>
      <Stack direction="row" spacing={2}>
    
       {buttonmenu.map((item) => (
                <Button variant="text"
                 sx={{color:"#616161",fontWeight:"600"}}
                 startIcon={<item.icon/>}>
                  {item.name}</Button>
            ))} 
        </Stack> 
        <Stack direction="row" sx={{marginLeft:43+'vh'}} spacing={2}>  
        {buttonmenu2.map((item) => (
                <Button variant="text"
                 sx={{color:"#616161",fontWeight:"600"}}
                 startIcon={<item.icon/>}>
                  {item.name}</Button>
            ))} 
       </Stack>
       </Stack>
        </Box>
    )
}