import { Grid, Typography,Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./create_user.module.css"
import {handleEditUserApi, handleFetchOneApi,} from "../src/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { toast } from "react-toastify";

const EditUser = () => {
  const navigate=useNavigate();
const {id}=useParams();
const [Value,setValue]=useState({
  rollnumber: "",
  username: "",
  email: "",
  phonenumber:"",
  course: "",
  branch: "",
  batch:"",
  usertype: ""
}
 
);

useEffect(()=>{
      handleFetchOneApi({id})
    .then((response)=>{
 if(response){
  setValue(response.data.user)
 }
    })
    .catch((error)=>{console.log(error)});

},[id])


const handUpdate=async()=>{
  
  
const response=await handleEditUserApi(id,Value);
console.log(response)
if(response.data.message=== "Data Updated Successful."){
  setValue({
    rollnumber: "",
    username: "",
    email: "",
    phonenumber:"",
    course: "",
    branch: "",
    batch:"",
    usertype: ""
  })
  toast.success(response.data.message)
  navigate("/users");
}else{
  toast.error(response.data.message)
}
  
}
const handleUsersBack=()=>{
  navigate("/users")
}
    


  return (
    <div className={styles.create_user_div}>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        style={{ height: "100%", width: "100%", paddingTop: "10px" }}
      >
        
        <Grid item style={{ height: "100%", width: "50%" }}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"50px"}
          >
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              style={{ width: "200px", height: "50px" }}
            >
              <Typography variant="h6">Roll Number</Typography>
            </Grid>
            <Grid
              item
              style={{ width: "200px", height: "55px", display: "flex" }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  value={Value.rollnumber}
    
                   onChange={(event) => {
             
              setValue({
                ...Value,rollnumber:event.target.value
               })
             
            }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"30px"}
          >
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              style={{ width: "200px", height: "50px" }}
            >
              <Typography variant="h6">User Name</Typography>
            </Grid>
            <Grid
              item
              style={{ width: "200px", height: "55px", display: "flex" }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
               value={Value.username}
                  onChange={(event) => {
                    setValue({
                      ...Value,username:event.target.value,
                     })
                   
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"30px"}
          >
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              style={{ width: "200px", height: "50px" }}
            >
              <Typography variant="h6">Email</Typography>
            </Grid>
            <Grid
              item
              style={{ width: "200px", height: "55px", display: "flex" }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
               value={Value.email}
                  onChange={(event) => {
                    setValue({
                      ...Value,email:event.target.value,
                     })
                   
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"30px"}
          >
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              style={{ width: "200px", height: "50px" }}
            >
              <Typography variant="h6">Phone Number</Typography>
            </Grid>
            <Grid
              item
              style={{ width: "200px", height: "55px", display: "flex" }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  value={Value.phonenumber}
                  onChange={(event) => {
                    setValue({
                      ...Value,phonenumber:event.target.value,
                     })
                   
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ height: "100%", width: "50%" }}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"50px"}
          >
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              style={{ width: "200px", height: "50px" }}
            >
              <Typography variant="h6">Course</Typography>
            </Grid>
            <Grid
              item
              style={{ width: "200px", height: "55px", display: "flex" }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  value={Value.course}
                  onChange={(event) => {
                    setValue({
                      ...Value,course:event.target.value,
                     })
                   
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"30px"}
          >
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              style={{ width: "200px", height: "50px" }}
            >
              <Typography variant="h6">Branch</Typography>
            </Grid>
            <Grid
              item
              style={{ width: "200px", height: "55px", display: "flex" }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                 value={Value.branch}
                  onChange={(event) => {
                    setValue({
                      ...Value,branch:event.target.value,
                     })
                   
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"30px"}
          >
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              style={{ width: "200px", height: "50px" }}
            >
              <Typography variant="h6">Batch</Typography>
            </Grid>
            <Grid
              item
              style={{ width: "200px", height: "55px", display: "flex" }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  value={Value.batch}
                  onChange={(event) => {
                    setValue({
                      ...Value,batch:event.target.value,
                     })
                   
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"30px"}
          >
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              style={{ width: "200px", height: "50px" }}
            >
              <Typography variant="h6">Uesr Type</Typography>
            </Grid>
            <Grid
              item
              style={{ width: "200px", height: "55px", display: "flex" }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  value={Value.usertype}
                  onChange={(event) => {
                   setValue({
                    ...Value,usertype:event.target.value,
                   })
                  }}
                />
              </Box>
            </Grid>
          </Grid>
         
         
        </Grid>
        <Grid container style={{justifyContent:"space-between",display:"flex",width:"82%",marginTop:"50px",marginBottom:"15px"}}>
        <Grid item><Button  color="primary" variant="contained" onClick={handleUsersBack}><ArrowBackIosNewIcon/><Typography marginLeft={"5px"}>back</Typography></Button></Grid>
          <Button type="submit" color="success" variant="contained" onClick={handUpdate} >Submit</Button>
          </Grid>
      </Grid>
    </div>
  );
};


export  default EditUser;