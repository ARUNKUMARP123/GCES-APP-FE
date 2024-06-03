import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, register, login } from "../Redux/Reducers/Auth.Reducer";
import { useEffect } from "react";
import { Spinner } from "./Spinner";
import { Grid, Typography } from "@mui/material";
// import Spinner from "./Spinner";

// import { handleLoginApi, handleRegistrationApi } from "../src/api";

export default function LoginModal({ ModalOpen, setModalOpen, Type }) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rollnumberError, setRollNumberError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const validateRollNumber = (rollNumber) => {
    const rollNumberRegex = /^[0-9]{12}$/;
    if (!rollNumberRegex.test(rollNumber)) {
      setRollNumberError('Roll number must be exactly 12 digits.');
    } else {
      setRollNumberError('');
    }
  };


  const handleRollNumberChange = (e) => {
    setFormValue((prevState) => ({...prevState,rollnumber:e.target.value}));
    validateRollNumber(e.target.value);
  };



  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneNumberError('Invalid phone number.');
    } else {
      setPhoneNumberError('');
    }
  };
  const handlePhoneNumberChange = (e) => {
    setFormValue((prevState) => ({...prevState,phonenumber:e.target.value}));
    validatePhoneNumber(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e) => {
    setFormValue((prevState)=>({...prevState,email:e.target.value}));
    validateEmail(e.target.value);
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    return passwordRegex.test(FormValue.password1);
  };

  const [FormValue, setFormValue] = useState({
    rollnumber: "",
    username: "",
    email: "",
    password1: "",
    password2: "",
    phonenumber: "",
    course: "",
    branch: "",
    batch: "",
  });

  const {
    rollnumber,
    username,
    email,
    password1,
    password2,
    phonenumber,
    course,
    batch,
    branch,
  } = FormValue;

  const { user, isError, isLoading, isSuccess, message, } = useSelector(
    (state) => state.Auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    <Spinner />;
  }

  // const handleUserLogin = (message) => {
  //   if (
  //     message === "Login Successful." ||
  //     message === "Account Creation Successful."
  //   ) {
  //     localStorage.setItem("message", message);
  //   }
  // };

  return (
    <React.Fragment>
      <Dialog
        open={ModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        PaperProps={{
          component: "form",
          onSubmit: async (event) => {
            event.preventDefault();
            if (Type === "login") {
              const userData = {
                rollnumber,
                username,
                email,
                password1,
              };
              dispatch(login(userData));

              // const response = await handleLoginApi(FormValue);
              // console.log(response.data, "response");
              // if (response.data) handleUserLogin(response.data.message);
            } else {
              if (password1 !== password2) {
                toast.error("password is not matching");
              } else {
                const userData = {
                  rollnumber,
                  username,
                  email,
                  password1,
                  phonenumber,
                  course,
                  batch,
                  branch,
                };
                dispatch(register(userData));
              }

              // const response = await handleRegistrationApi(FormValue);
              // console.log(response.data, "response");
              // if (response.data) handleUserLogin(response.data.message);
            }

            setModalOpen(false);
          },
        }}
      >
        <DialogTitle>{Type === "login" ? "LogIn" : "Registration"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="rollnumber"
            name="rollnumber"
            label="Roll Number"
            type="text"
            fullWidth
            variant="standard"
            error={Boolean(rollnumberError)}
            helperText={rollnumberError}
            onChange={handleRollNumberChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="username"
            name="username"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setFormValue((prevState) => ({
                ...prevState,
                username: event.target.value,
              }));
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            error={Boolean(emailError)}
            helperText={emailError}
            onChange={handleEmailChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="Password1"
            name="password1"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            error={Boolean(passwordError)}
            helperText={passwordError}
            onChange={(event) => {
              setFormValue((prevState) => ({
                ...prevState,
                password1: event.target.value,
              }));
              if (!validatePassword(FormValue.password1)) {
                setPasswordError(
                  "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
                );
              } else {
                setPasswordError("");
              }
            }}
          />
          {Type !== "login" && (
            <>
              <TextField
                autoFocus
                required
                margin="dense"
                id="password2"
                name="password2"
                label="ConfirmPassword"
                type="password"
                fullWidth
                variant="standard"
                error={Boolean(confirmPasswordError)}
                helperText={confirmPasswordError}
                onChange={(event) => {
                  setFormValue((prevState) => ({
                    ...prevState,
                    password2: event.target.value,
                  }));
               
                  if (FormValue.password1 !== event.target.value) {
                    setConfirmPasswordError(
                      "Password Not Match With ConfirmPassword..."
                    );
                  } else {
                    setConfirmPasswordError("");
                  }
                }}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="phonenumber"
                name="phonenumber"
                label="Phone Number"
                type="text"
                fullWidth
                variant="standard"
                error={Boolean(phoneNumberError)}
                helperText={phoneNumberError}
                onChange={handlePhoneNumberChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="course"
                name="course"
                label="Course"
                type="text"
                fullWidth
                variant="standard"
                onChange={(event) => {
                  setFormValue((prevState) => ({
                    ...prevState,
                    course: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="branch"
                name="branch"
                label="Branch"
                type="text"
                fullWidth
                variant="standard"
                onChange={(event) => {
                  setFormValue((prevState) => ({
                    ...prevState,
                    branch: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="batch"
                name="batch"
                label="Batch"
                type="text"
                fullWidth
                variant="standard"
                onChange={(event) => {
                  setFormValue((prevState) => ({
                    ...prevState,
                    batch: event.target.value,
                  }));
                }}
              />

            </>
          )}
        </DialogContent>

        <DialogActions>
          <Grid container padding={2} justifyContent={"space-between"}>
            <Grid item>
              {" "}
              {Type === "login" && (
                <Link
                  onClick={() => {
                    setModalOpen(false);
                  }}
                  to="forgot-password"
                  style={{ textDecoration: "none" }}
                >
                  <Typography color={"primary"}>Forgot Password</Typography>
                </Link>
              )}
            </Grid>
          </Grid>
          <Grid container justifyContent={"space-around"}>
            <Grid item>
              <Button
                color="error"
                variant="contained"
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button color="success" variant="contained" type="submit">
                {Type === "login" ? "LogIn" : "Registration"}
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

LoginModal.propTypes = {
  ModalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
  Type: PropTypes.string,
};
