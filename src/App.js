import logo from './logo.svg';
import './App.css';
import {Stack,Box, Divider, Card} from "@mui/material";
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Appbar } from './Components/Appbar';
import { Head } from './Components/Head';
import { Home } from './Components/Cards/Home';


function App() {
  return (
    <div className="App">
     <Stack direction="row">
     <Sidebar/>
      <Box >
     <Appbar/>
     <Head/>
     <Divider/>
     <Box marginLeft={5}>
     <Home/>
     </Box>
      </Box>
     </Stack>
     
    </div>
  );
}

export default App;
