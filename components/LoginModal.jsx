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
  const [emailError, setEmeilError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rollnumberError, setRollnumberError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(FormValue.email);
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
    usertype: "",
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
    usertype,
  } = FormValue;

  const { user, isError, isLoading, isSuccess, message } = useSelector(
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
  console.log(FormValue);

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
                  usertype,
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
            onChange={(event) => {
              setFormValue((prevState) => ({
                ...prevState,
                rollnumber: event.target.value,
              }));
              if (FormValue.rollnumber < 6) {
                setRollnumberError(
                  "RollNumber must be atleast 12 characters..."
                );
              } else {
                setRollnumberError("");
              }
            }}
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
            onChange={(event) => {
              setFormValue((prevState) => ({
                ...prevState,
                email: event.target.value,
              }));
              if (!validateEmail(FormValue.email)) {
                setEmeilError("Please Enter Valid email..");
              } else {
                setEmeilError("");
              }
            }}
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
                  if (FormValue.password1 !== FormValue.password2) {
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
                onChange={(event) => {
                  setFormValue((prevState) => ({
                    ...prevState,
                    phonenumber: event.target.value,
                  }));
                  if (FormValue.phonenumber < 10) {
                    setPhoneNumberError(
                      "PhoneNumber must be atleast 10 characters..."
                    );
                  } else {
                    setPhoneNumberError("");
                  }
                }}
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
              <TextField
                autoFocus
                required
                margin="dense"
                id="usertype"
                name="usertype"
                label="UserType"
                type="text"
                fullWidth
                variant="standard"
                onChange={(event) => {
                  setFormValue((prevState) => ({
                    ...prevState,
                    usertype: event.target.value,
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
