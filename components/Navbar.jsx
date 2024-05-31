import {AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import TemporaryDrawer from "./TemporaryDrawer.jsx";
import LoginModal from "./LoginModal.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {logout} from "../Redux/Reducers/Auth.Reducer.js"


export const Navbar = () => {
const navigate=useNavigate();
const dispatch=useDispatch();


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

  const  handleloginclick=()=>{
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
     {user &&(<Button onClick={toggleDrawer(true)}> <MenuIcon/></Button>)}
      </Grid>
    <Grid item >

      {user?(
      <>
       <Button color="warning" variant="contained" onClick={handleLogOut}>LogOut</Button>
      </>):(
      <>
      
      <Grid container>
      <Grid item><Button   color="success" variant="contained" onClick={handlesignupclick}>SignUp</Button></Grid>
      <Grid item>
      <Grid container flexDirection={"row"} justifyContent={"center"} alignItems={"end"}>
      <Grid item ><Typography style={{fontSize:"13px",paddingBottom:"0px"}} color={"primary"} padding={1}>Already Have An Account ?</Typography></Grid>
        <Grid item><Button color="success" variant="contained" onClick={handleloginclick}>LogIn</Button></Grid>
       
      </Grid>
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
