import {AppBar, Button, Grid, Toolbar, Typography,IconButton,Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import TemporaryDrawer from "./TemporaryDrawer.jsx";
import LoginModal from "./LoginModal.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {logout} from "../Redux/Reducers/Auth.Reducer.js"
import { useMediaQuery, useTheme } from '@mui/material'; // Added useMediaQuery and useTheme

export const Navbar = () => {
const navigate=useNavigate();
const dispatch=useDispatch();
const theme = useTheme(); // Added useTheme
const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Added useMediaQuery

  const [TemporaryDrawerOpen, setTemporaryDrawerOpen] = useState(false);
  const [ModalOpen,setModalOpen]=useState(false);
  const [Type,setType]=useState("login");
  const { user } = useSelector((state) => state.Auth);


const handleLogOut=()=>{
  localStorage.removeItem("user");
dispatch(logout());
navigate("/");
}

  const toggleDrawer = (newOpen) => () => {
    setTemporaryDrawerOpen(newOpen);
  };

  const  handleLoginClick=()=>{
    setModalOpen(true),
    setType("login")
  }

  const  handlesignupclick=()=>{
    setModalOpen(true),
    setType("registration")
  }


  return (
   <>
   <AppBar color="default" position="sticky">
    <Toolbar>
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
    <Grid item>
     {user &&(<IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>)}
      </Grid>
    <Grid item >

      {user?(
      <>
       <Button color="warning" variant="contained" onClick={handleLogOut}>LogOut</Button>
      </>):(
      <>
      
      <Grid container>
      <Grid item><Button style={{marginRight:"2px"}}  color="success" variant="contained" onClick={handlesignupclick}>SignUp</Button></Grid>
      <Grid item>
      <Box display={isMobile ? 'none' : 'block'}> {/* Conditionally render based on screen size */}
                            <Grid container flexDirection={"row"} justifyContent={"center"} alignItems={"end"}>
      <Grid item ><Typography style={{fontSize:"13px",paddingBottom:"0px"}} color={"primary"} padding={1}>Already Have An Account ?</Typography></Grid>
        <Grid item><Button color="success" variant="contained" onClick={handleLoginClick}>LogIn</Button></Grid>
       
      </Grid>
                    </Box>
                    <Box display={isMobile ? 'block' : 'none'}> {/* Conditionally render based on screen size */}
                      <Button color="success" variant="contained" onClick={handleLoginClick}>LogIn</Button>
                    </Box>
      </Grid>
    
      </Grid>
      
      </>)}
       
        
    </Grid>
    </Grid>
    </Toolbar>
   </AppBar>
   <TemporaryDrawer toggleDrawer={toggleDrawer(false)} TemporaryDrawerOpen={TemporaryDrawerOpen} setTemporaryDrawerOpen={setTemporaryDrawerOpen}/>
<LoginModal Type={Type} ModalOpen={ModalOpen}  setModalOpen={setModalOpen}/>
   </>
  )
}
