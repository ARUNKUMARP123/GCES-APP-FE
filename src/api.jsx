import axios from "axios";

const localApi = "http://localhost:4001";

// const proApi="https://restaurant-demo-node-9oqh.onrender.com";

// const apiURL=import.meta.env.REACT_APP_ENV==='production'? proApi:localApi;

const apiURL = localApi;

export const handleLoginApi = ({
  rollnumber = "",
  username = "",
  email = "",
  password1 = "",
}) => {
  return axios.post(apiURL + "/login", {
    rollnumber,
    username,
    email,
    password1,
  });
};
export const handleRegistrationApi = ({
  rollnumber = "",
  username = "",
  email = "",
  password1 = "",
  phonenumber = "",
  course = "",
  branch = "",
  batch = "",
  usertype = "",
}) => {
  return axios.post(apiURL + "/registration", {
    rollnumber,
    username,
    email,
    password1,
    phonenumber,
    course,
    branch,
    batch,
    usertype,
  });
};


export const handleUsersApi = ({
  rollnumber = "",
  username = "",
  email = "",
  phonenumber = "",
  course = "",
  branch = "",
  batch = "",
  usertype = "",
}) => {
  return axios.post(apiURL+"/create_users", {
    rollnumber,
    username,
    email,
    phonenumber,
    course,
    branch,
    batch,
    usertype,
  });
};

export const fetchUsersApi= ()=>{
    return axios.get(apiURL+"/fetchUsers");

  };
  
  export const handleEditUserApi= (id,Value)=>{
    return axios.put(apiURL+"/editUsers/"+id,Value);

  };

  export const handleFetchOneApi= ({id})=>{
    return axios.get(apiURL+"/getone/"+id);

  };

  export const handleDeleteUserApi= (userid)=>{
    return axios.delete(apiURL+"/deleteUsers/"+userid);

  };

  export const handleForgotPasswordApi= (email)=>{
    return axios.post(apiURL+"/forgot-password/",{email});

  };
  export const handleResetPasswordApi= (id,token,password)=>{
    return axios.post(`${apiURL}+/reset-password/${id}/${token}`,{password});

  };


 
