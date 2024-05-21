import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";  
import PropTypes from "prop-types";
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from "react-router-dom";

export default function TemporaryDrawer({
  TemporaryDrawerOpen,
  toggleDrawer = () => {},
}) {

  const navigate=useNavigate();

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
       
          <ListItem  disablePadding>
            <ListItemButton onClick={()=>{navigate("/")}}>
              <ListItemIcon>
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
      </List>
      <List >
          <ListItem  disablePadding >
            <ListItemButton onClick={()=>{navigate("/users")}} > 
              <ListItemIcon>
               <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem  disablePadding>
            <ListItemButton onClick={()=>{navigate("/task")}}>
              <ListItemIcon>
               <TaskIcon/>
              </ListItemIcon>
              <ListItemText primary={"Task"} />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem  disablePadding>
            <ListItemButton onClick={()=>{navigate("/jobs")}}>
              <ListItemIcon>
              <WorkIcon/>
              </ListItemIcon>
              <ListItemText primary={"Jobs"} />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem  disablePadding>
            <ListItemButton onClick={()=>{navigate("/profile_info")}}>
              <ListItemIcon>
               <PermIdentityIcon/>
              </ListItemIcon>
              <ListItemText primary={"Profile Info"} />
            </ListItemButton>
          </ListItem>
      </List>
    
    </Box>
  );

  return (
    <div>
      <Drawer open={TemporaryDrawerOpen} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

TemporaryDrawer.propTypes = {
  TemporaryDrawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};
