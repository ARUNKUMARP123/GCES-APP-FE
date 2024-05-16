import { HomePage } from "../components/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Users } from "../components/Users";
import { Navbar } from "../components/Navbar";
import { Task } from "../components/Task";
import { Jobs } from "../components/Jobs";
import { ProfileInfo } from "../components/ProfileInfo";
import { CreateUsers } from "../components/CreateUsers";
import EditUser from "../components/EditUser"
import {ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.css"
import { ForgotPassword } from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";




const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
   
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/tasks" element={<Task/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="/profile_info" element={<ProfileInfo/>}/>
      <Route path="/create" element={<CreateUsers/>}/>
      <Route path="/edit/:id" element={<EditUser/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
};

export default App;
 