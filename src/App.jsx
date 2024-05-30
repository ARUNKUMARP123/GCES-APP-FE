import { HomePage } from "../components/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Users } from "../components/Users";
import { Navbar } from "../components/Navbar";
import { Jobs } from "../components/Jobs";
import { ProfileInfo } from "../components/ProfileInfo";
import { CreateUsers } from "../components/CreateUsers";
import EditUser from "../components/EditUser"
import {ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.css"
import { ForgotPassword } from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
import { CreateTask } from "../components/CreateTask";
import TaskList from "../components/TaskList";
import EditTask from "../components/EditTask";




const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
   
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/task" element={<TaskList/>}/>
      <Route path="/create-task" element={<CreateTask/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="/profile_info" element={<ProfileInfo/>}/>
      <Route path="/create" element={<CreateUsers/>}/>
      <Route path="/edit/:id" element={<EditUser/>}/>
      <Route path="/edit-task/:id" element={<EditTask/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
};


export default App;
 