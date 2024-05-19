import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { handleForgotPasswordApi } from "../src/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import {  useNavigate } from "react-router-dom";

export const ForgotPassword = () => {

  const [email, setEmail] = useState()
  const navigate = useNavigate()


    const handleForgot= async()=>{
      const response=await handleForgotPasswordApi(email);
      if(response.data.Status === "Reset Password Link send Success"){
        toast.success(response.data.Status)
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
            <Typography textAlign={"center"}>Forgot Password</Typography>
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
               type="email"
               placeholder="Enter Email"
               autoComplete="off"
               name="email"
                id="email"
                label="Enter Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box></Grid>
            </Grid>
           
          </Grid>
          <Grid item display={"flex"} alignItems={"center"} justifyContent={"center"}><Button variant="contained" onClick={handleForgot}>Send</Button></Grid>
        </Grid>
      </Grid>
    </div>
  );
};
