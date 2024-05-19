import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { handleResetPasswordApi } from "../src/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
// import {  useNavigate } from "react-router-dom";

const ResetPassword = () => {

  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate()
  const {id, token} = useParams()

  const validatePasswords = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword); // **validate on change**
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value); // **validate on change**
  };

    const handleReset= async()=>{
      const response=await handleResetPasswordApi(id,token,password);
      console.log(response)
      if(response.data.message === "Password Reset Successful."){
        toast.success(response.data.message)
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
                value={password}
                onChange={handlePasswordChange}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { mb: 5, width: "30ch" },
              }}
              noValidate
              autoComplete="off"
            >
                <TextField
               type="password"
               placeholder="Confirm New Password"
               autoComplete="off"
               name="Confirmpassword"
                id=" Confirmpassword"
                label="Confirm New Password"
                variant="outlined"
                value={confirmPassword}
                error={Boolean(confirmPasswordError)}
                helperText={confirmPasswordError}
                onChange={handleConfirmPasswordChange}
              />
            </Box>
            </Grid>
            </Grid>
           
          </Grid>
          <Grid item display={"flex"} alignItems={"center"} justifyContent={"center"}><Button variant="contained" onClick={handleReset}>Update</Button></Grid>
        </Grid>
      </Grid>
    </div>
  );
};


export default ResetPassword;