import axios from "axios";

const localApi = "http://localhost:4001";

const API_URL  =import.meta.env.VITE_API_URL || localApi;


const apiURL = axios.create({
  baseURL: API_URL,
  withCredentials:true,
});

// const apiURL = localApi;
  
export const handleLoginApi = ({
  rollnumber = "",
  username = "",
  email = "",
  password1 = "",
}) => {
  return apiURL.post("/login", {
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
  return apiURL.post("/registration", {
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
  return apiURL.post("/create_users", {
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
    return apiURL.get("/fetchUsers",{withCredentials:true});

  };
  
  export const handleEditUserApi= (id,Value)=>{
    return apiURL.put("/editUsers/"+id,{Value},{withCredentials:true});

  };

  export const handleFetchOneApi= ({id})=>{
    return apiURL.get("/getone/"+id,{withCredentials:true});

  };

  export const handleDeleteUserApi= (userid)=>{
    return apiURL.delete("/deleteUsers/"+userid,{withCredentials:true});

  };

  export const handleForgotPasswordApi= (email)=>{
    return apiURL.post("/forgot-password/",{email});

  };
  export const handleResetPasswordApi= (id,token,password)=>{
    return apiURL.post("/reset-password/"+id+"/"+token,{password});

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
    return apiURL.post("/create-task", {
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
    return apiURL.put("/updateTask/"+id, {
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
    return apiURL.delete("/deleteTask/"+id,{withCredentials:true});

  };

  export const fetchTasksApi= ()=>{
    return apiURL.get("/getTasks",{withCredentials:true});

  };


  export const handleUpdateTaskStatus = (taskId, statusData) => {
    return apiURL.put("/updateTaskStatus/"+taskId, statusData,{withCredentials:true});
  };

  export const handleUpdateTaskMark = (taskId, marks) => {
    return apiURL.put("/updateTaskMarks/"+taskId, marks,{withCredentials:true});
  };

  export const handleUpdateSubmitTaskURL = (taskId, url) => {
    return apiURL.put("/updateSubmitTaskUrl/"+taskId, url,{withCredentials:true});
  };

  export const handleUpdateComments = (taskId, field) => {
    return apiURL.put("/updatecomments/"+taskId, field,{withCredentials:true});
  };

 
