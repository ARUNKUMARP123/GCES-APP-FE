import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { handleResetPasswordApi } from "../src/api";
import { useNavigate, useParams } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";

const ResetPassword = () => {

  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const {id, token} = useParams()
console.log(password)
    const handleReset= async()=>{
      const response=await handleResetPasswordApi(id,token,password);
      if(response.data.Status === "Success"){
        navigate("/")
      }
    }

    
  return (
    <div>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{ backgroundColor: "#DDE3E9", height: "100vh" }}
      >
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          style={{ backgroundColor: "white", padding: "10px", width: "400px" }}
        >
          <Grid item  marginBottom={"30px"}>
            <Typography textAlign={"center"}>Reset Password</Typography>
          </Grid>
          <Grid item >
            <Grid container width={"100%"} display={"flex "} justifyContent={"space-evenly"} alignItems={"center"} >
             
              <Grid item > <Box
              component="form"
              sx={{
                "& > :not(style)": { mb: 5, width: "30ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
               type="password"
               placeholder="Enter New Password"
               autoComplete="off"
               name="password"
                id="password"
                label="Enter New Password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box></Grid>
            </Grid>
           
          </Grid>
          <Grid item display={"flex"} alignItems={"center"} justifyContent={"center"}><Button variant="contained" onClick={handleReset}>Update</Button></Grid>
        </Grid>
      </Grid>
    </div>
  );
};


export default ResetPassword;