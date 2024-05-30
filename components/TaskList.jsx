import { useState, useEffect } from 'react';
import { Typography, Button, Box,Grid} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { fetchTasksApi, handleDeleteTaskApi, handleUpdateComments, handleUpdateSubmitTaskURL, handleUpdateTaskMark, handleUpdateTaskStatus } from '../src/api';
import TaskCard from './TaskCard';
import { useSelector } from 'react-redux';
import {  Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const TaskList = () => {

  const { user } = useSelector(
    (state) => state.Auth
  );
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');
  const [tasks, setTasks] = useState([]); 
  const [userRole, setUserRole] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  const isAdmin=userRole;



  useEffect(() => {
    if(user){
      setUserId(user.login_user_id)
      setUserRole(user.user_role)
    }
    const fetchTasks = async () => {
      const response = await fetchTasksApi();
      setTasks(response.data.user);
      setFilteredTasks(response.data.user);
  };
    fetchTasks()
  }, [user]); 

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterStatus(value);
    applyFilters(value);
  };
  
  const applyFilters = (status) => {
    console.log(status)
    let filtered = tasks;
    if (status) {
      filtered = tasks.filter(task => task.status === status);
    
    }
    if (userRole === 'Student') {
      filtered = filtered.filter(task => task.assignedTo === userId);
    }
    setFilteredTasks(filtered);
  };



  // const filteredTasks = userRole === 'Admin' ? tasks : tasks.filter(task => task.assignedTo === userId);

  const handleDelete = async (id) => {
   
      const response=await handleDeleteTaskApi(id);
      console.log(response)
      setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-task/${id}`);
  };

  const handleCreate = () => {
    navigate('/create-task');
  };

  const handleStatusChange = async (id, status) => {
    
      await handleUpdateTaskStatus(id, { status });
      setTasks(tasks.map(task => (task._id === id ? { ...task, status } : task)));
  };

  const handleMarksChange = async (id, marks) => {

      await handleUpdateTaskMark(id, { marks });
      setTasks(tasks.map(task => (task._id === id ? { ...task, marks } : task)));
  };

  const handleSubmitUrl = async (id, url) => {
    
      await handleUpdateSubmitTaskURL(id,  { submissionUrl: url });
      setTasks(tasks.map(task => (task._id === id ? { ...task, submissionUrl: url } : task)));
    }
  
    const handleCommentChange = (taskId, field, value) => {
      setTasks(tasks.map(task => 
        task._id === taskId ? { ...task, [field]: value } : task
      ));
    };

    const handleSubmitComment = async (taskId, field) => {
      const task = tasks.find(task => task._id === taskId);
        await handleUpdateComments(taskId, { [field]: task[field] });
    };

  return (
    <Box>
    <Typography variant="h4" gutterBottom>
      Task List
    </Typography>
    {isAdmin==="Admin" && (
      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleCreate}>
        Create Task
      </Button>
    )}
       <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select value={filterStatus} onChange={handleFilterChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {filteredTasks.map((task) => (
        <Grid item xs={12} md={6} key={task._id}>
          <TaskCard
            task={task}
            isAdmin={userRole}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleStatusChange={handleStatusChange}
            handleMarksChange={handleMarksChange}
            handleSubmitUrl={handleSubmitUrl}
            handleCommentChange={handleCommentChange}
            handleSubmitComment={handleSubmitComment}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
  );
};

export default TaskList;
