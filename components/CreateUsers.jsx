import { Grid, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./create_user.module.css";
import { fetchUsersApi, handleUsersApi } from "../src/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const CreateUsers = () => {
  const [emailError, setEmailError] = useState("");
  const [rollNumberError, setRollNumberError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const navigate = useNavigate();
  const [usersFormValue, setUsersFormValue] = useState({
    rollnumber: "",
    username: "",
    email: "",
    phonenumber: "",
    course: "",
    branch: "",
    batch: "",
    usertype: "",
  });

  useEffect(() => {
    handleApiCall();
  }, []);

  const HandleUsers = () => {
    if (
      usersFormValue.rollnumber &&
      usersFormValue.username &&
      usersFormValue.email &&
      usersFormValue.phonenumber &&
      usersFormValue.course &&
      usersFormValue.branch &&
      usersFormValue.batch &&
      usersFormValue.usertype
    ) {
      handleUsersApi(usersFormValue);
      setUsersFormValue({
        rollnumber: "",
        username: "",
        email: "",
        phonenumber: "",
        course: "",
        branch: "",
        batch: "",
        usertype: "",
      });
      navigate("/users");
      handleApiCall()
    }
  };

  const handleUsersBack = () => {
    navigate("/users");
  };
  const handleApiCall = () => {
    fetchUsersApi();
  };

  const validateRollNumber = (rollNumber) => {
    const rollNumberRegex = /^[0-9]{12}$/;
    if (!rollNumberRegex.test(rollNumber)) {
      setRollNumberError("Roll number must be exactly 12 digits.");
    } else {
      setRollNumberError("");
    }
  };

  const handleRollNumberChange = (e) => {
    setUsersFormValue({ ...usersFormValue, rollnumber: e.target.value });
    validateRollNumber(e.target.value);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneNumberError("Invalid phone number.");
    } else {
      setPhoneNumberError("");
    }
  };
  const handlePhoneNumberChange = (e) => {
    setUsersFormValue({ ...usersFormValue, phonenumber: e.target.value });
    validatePhoneNumber(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e) => {
    setUsersFormValue({  ...usersFormValue,email: e.target.value });
    validateEmail(e.target.value);
  };

  console.log(usersFormValue);
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
                  value={usersFormValue.rollnumber}
                  error={Boolean(rollNumberError)}
                  helperText={rollNumberError}
                  onChange={handleRollNumberChange}
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
                  value={usersFormValue.username}
                  onChange={(event) => {
                    setUsersFormValue({
                      ...usersFormValue,
                      username: event.target.value,
                    });
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
                  value={usersFormValue.email}
                  error={Boolean(emailError)}
                  helperText={emailError}
                  onChange={handleEmailChange}
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
                  value={usersFormValue.phonenumber}
                  error={Boolean(phoneNumberError)}
                  helperText={phoneNumberError}
                  onChange={handlePhoneNumberChange}
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
                  value={usersFormValue.course}
                  onChange={(event) => {
                    setUsersFormValue({
                      ...usersFormValue,
                      course: event.target.value,
                    });
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
                  value={usersFormValue.branch}
                  onChange={(event) => {
                    setUsersFormValue({
                      ...usersFormValue,
                      branch: event.target.value,
                    });
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
                  value={usersFormValue.batch}
                  onChange={(event) => {
                    setUsersFormValue({
                      ...usersFormValue,
                      batch: event.target.value,
                    });
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
                  value={usersFormValue.usertype}
                  onChange={(event) => {
                    setUsersFormValue({
                      ...usersFormValue,
                      usertype: event.target.value,
                    });
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            justifyContent: "space-between",
            display: "flex",
            width: "82%",
            marginTop: "50px",
            marginBottom: "15px",
          }}
        >
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={handleUsersBack}
            >
              <ArrowBackIosNewIcon />
              <Typography marginLeft={"5px"}>back</Typography>
            </Button>
          </Grid>
          <Grid item>
            {" "}
            <Button
              type="submit"
              color="success"
              variant="contained"
              onClick={HandleUsers}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
