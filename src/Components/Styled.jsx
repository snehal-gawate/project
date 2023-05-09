import styled from "@emotion/styled";
import {Box,Typography,ListItemText,Button,Divider} from "@mui/material";


 export const StyledBox =styled(Box)({
        marginLeft:5+'vh',
        textAlign:"left"
      });
      
 export const StyledTypo = styled (Typography)({
        opacity:0.8
      })
    
 export const MyListItemText = styled(ListItemText)(() => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& .MuiListItemText-primary': {
          fontWeight: 'bold',
        },
        '& .MuiListItemText-secondary': {
        marginRight:5+'vh'
        },
      }));

 export  const ConicalButton = styled(Button)(() => ({
        position: 'relative',
        zIndex: 1,
        
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-1px', // compensate for the button border
          width: 0,
          height: 0,
          borderTopWidth: '18px',
          borderBottomWidth: '18px',
          borderLeftWidth: '10px',
          borderTopStyle: 'solid',
          borderBottomStyle: 'solid',
          borderLeftStyle: 'solid',
          borderColor: 'transparent',
          borderTopColor: "#eeeeee",
          borderBottomColor: "#eeeeee",
          backgroundColor:"white",
          zIndex: -1,
          
        },
        
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: '-1px', // compensate for the button border
          width: 0,
          height: 0,
          borderTopWidth: '20px',
          borderBottomWidth: '20px',
          borderLeftWidth: '12px',
          borderTopStyle: 'solid',
          borderBottomStyle: 'solid',
          borderLeftStyle: 'solid',
          borderColor: 'transparent',
          borderTopColor: "white",
          borderBottomColor: "white",
          backgroundColor:"#eeeeee",
          zIndex: -1,
        },
      }));

      