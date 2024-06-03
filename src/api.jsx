import axios from "axios";

const localApi = "http://localhost:4001";

const API_URL  =import.meta.env.VITE_API_URL || localApi;

const apiURL = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// const apiURL = localApi;
  
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
  },{withCredentials:true});
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
  },{withCredentials:true});
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
  },{withCredentials:true});
};

export const fetchUsersApi= ()=>{
    return axios.get(apiURL+"/fetchUsers",{withCredentials:true});

  };
  
  export const handleEditUserApi= (id,Value)=>{
    return axios.put(apiURL+"/editUsers/"+id,{Value},{withCredentials:true});

  };

  export const handleFetchOneApi= ({id})=>{
    return axios.get(apiURL+"/getone/"+id,{withCredentials:true});

  };

  export const handleDeleteUserApi= (userid)=>{
    return axios.delete(apiURL+"/deleteUsers/"+userid,{withCredentials:true});

  };

  export const handleForgotPasswordApi= (email)=>{
    return axios.post(apiURL+"/forgot-password/",{email});

  };
  export const handleResetPasswordApi= (id,token,password)=>{
    return axios.post(apiURL+"/reset-password/"+id+"/"+token,{password});

  };


  export const handleCreateTaskApi = ({
    title= '',
    description= '',
    dueDate= '',
    assignedTo= '',
    status= 'Pending',
    adminComments= '',
    taskUrl= '',
  }) => {
    return axios.post(apiURL+"/create-task", {
      title,
      description,
      dueDate,
      assignedTo,
      status,
      adminComments,
      taskUrl,
    },{withCredentials:true});
  };

  export const handleUpdateTaskApi = (id,{
    title= '',
    description= '',
    dueDate= '',
    assignedTo= '',
    status= 'Pending',
    adminComments= '',
    studentComments='',
    taskUrl= '',
  }) => {
    return axios.put(apiURL+"/updateTask/"+id, {
      title,
      description,
      dueDate,
      assignedTo,
      status,
      adminComments,
      studentComments,
      taskUrl,
    },{withCredentials:true});
  };


  export const handleDeleteTaskApi= (id)=>{
    return axios.delete(apiURL+"/deleteTask/"+id,{withCredentials:true});

  };

  export const fetchTasksApi= ()=>{
    return axios.get(apiURL+"/getTasks",{withCredentials:true});

  };


  export const handleUpdateTaskStatus = (taskId, statusData) => {
    return axios.put(apiURL+"/updateTaskStatus/"+taskId, statusData,{withCredentials:true});
  };

  export const handleUpdateTaskMark = (taskId, marks) => {
    return axios.put(apiURL+"/updateTaskMarks/"+taskId, marks,{withCredentials:true});
  };

  export const handleUpdateSubmitTaskURL = (taskId, url) => {
    return axios.put(apiURL+"/updateSubmitTaskUrl/"+taskId, url,{withCredentials:true});
  };

  export const handleUpdateComments = (taskId, field) => {
    return axios.put(apiURL+"/updatecomments/"+taskId, field,{withCredentials:true});
  };

 
