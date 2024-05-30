import{Grid,Typography,Button} from "@mui/material"
import TaskCard from "./TaskList"
import { Link } from "react-router-dom"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Task = () => {
  return (
    <>
    <Grid container justifyContent={"space-between"} alignItems={"baseline"}  >
    <Grid item >
      <Typography padding={2} color={"orangered"} variant="h4">Task Submissions</Typography>
      </Grid>
       <Grid item  ><Link to="/create-task"> <Button color='success' variant='contained'><AddCircleOutlineIcon/><Typography textTransform={"capitalize"} marginLeft={1}>Create New Task</Typography></Button></Link> </Grid>
      
    </Grid>
        <Grid container >
        <Grid item><TaskCard/></Grid>
      </Grid>
    </>
    
  )
}
