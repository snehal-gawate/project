import React from "react";
import { AccessTime, ArticleOutlined, CalendarMonthOutlined, ChecklistOutlined, DashboardOutlined, 
     Groups2Outlined, HourglassEmptyOutlined,  InsertPhotoOutlined,  InsightsOutlined, 
      Inventory2Outlined,  OtherHousesOutlined,PlaceOutlined,  Search, 
     SettingsInputComponentOutlined, TornadoOutlined } from "@mui/icons-material";
import { List,ListItemButton,ListSubheader,ListItemIcon,ListItemText,Box,Stack,
     Typography ,ListItem} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { useTheme } from '@mui/material/styles';

const menuheadlist=[
    { icon: Search, name: 'Search' },
    { icon: SettingsInputComponentOutlined, name: 'Customizations' },
    { icon:DashboardOutlined , name: 'Templates' },
]

const menuList = [
    { icon: OtherHousesOutlined, name: 'Dashboard' },
    { icon: AccessTime, name: 'Time Tracking' },
    { icon: ChecklistOutlined, name: 'Task List' },
    { icon: TornadoOutlined, name: 'Lead Pipeline' },
    { icon: HourglassEmptyOutlined, name: 'Estimates' },
    { icon: ArticleOutlined, name: 'Invoices' },
    { icon: Inventory2Outlined, name: 'Projects' },
    { icon: CalendarMonthOutlined, name: 'Schedule' },
    { icon: InsertPhotoOutlined, name: 'Photos & Files' },
    { icon: Groups2Outlined, name: 'Customers' },
    { icon: PlaceOutlined, name: 'Map' },
    { icon: InsightsOutlined, name: 'Reports' },
];

const myimage=(require("../Images/logo.png"));

export const Sidebarmenu =()=>{
    const theme = useTheme();
    return(
        <div>
             <List
        
      subheader={
        <ListSubheader sx={{bgcolor:theme.palette.grey[200],
        marginBottom:3+'vh',textAlign:"left"}}>
        <CircleIcon color="error"/>  
        <CircleIcon color="warning"/>  
        <CircleIcon color="success"/>  
        
        <Stack direction="row" spacing={1}>
          <Box component='img' src={myimage} height={30} />
          <Typography variant="h5" fontWeight="bold" color={theme.palette.grey[900]}>Hallal</Typography>
          </Stack>
        </ListSubheader>
      }
    >
       {menuheadlist.map((item) => (
                <ListItem key={item.name} disablePadding >
                    <ListItemButton>
                        <ListItemIcon >
                            <item.icon fontSize='large' />
                        </ListItemIcon>
                     <ListItemText primary={item.name}/>
                    </ListItemButton>
                </ListItem>
            ))}
      </List>
      <List sx={{color:"black"}}>
        <Typography sx={{marginRight:12+'vh'}}> Mein Menu</Typography>
        {menuList.map((item) => (
                <ListItem key={item.name} disablePadding>
                    <ListItemButton>
                        <ListItemIcon >
                            <item.icon fontSize='large' />
                        </ListItemIcon>
                     <ListItemText primary={item.name}/>
                    </ListItemButton>
                </ListItem>
            ))}
      </List>
        </div>
    )
}