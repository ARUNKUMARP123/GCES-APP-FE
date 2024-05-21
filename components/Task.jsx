import{Grid,Typography} from "@mui/material"
import TaskCard from "./TaskCrad"


export const Task = () => {
  return (
    <Grid container display={"flex"} flexDirection={"column"} >
      <Grid item  display={"flex"} justifyContent={"center"}>
      <Typography padding={2} color={"orangered"} variant="h4">Task Submissions</Typography>
      </Grid>
      <Grid item style={{backgroundColor:"#DDE3E9",width:"100%",height:"auto",padding:"20px"}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item><TaskCard/></Grid>
        <Grid item><TaskCard/></Grid>
        <Grid item><TaskCard/></Grid>
        <Grid item><TaskCard/></Grid>
        <Grid item><TaskCard/></Grid>
        <Grid item><TaskCard/></Grid>
        <Grid item><TaskCard/></Grid>
        <Grid item><TaskCard/></Grid>
        </Grid>
      
      </Grid>

    </Grid>
  )
}
