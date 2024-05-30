import { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTasksApi, handleUpdateTaskApi } from "../src/api";
import { Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetchTasksApi();
      console.log(response);
      const task = response.data.user.find((task) => task._id === id);
      setTask({
        ...task,
        dueDate: formatDateForInput(task.dueDate) // Format the date here
      });
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleUpdateTaskApi(id, task);
    navigate("/task");
  };
  const handleUsersBack = () => {
    navigate("/task");
  };

  if (!task) return <Typography>Loading...</Typography>;

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Grid
        item
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        <Grid
          container
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            width: "70%",
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom>
              Edit Task
            </Typography>
            <TextField
              label="Title"
              name="title"
              value={task.title}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={task.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Due Date"
              name="dueDate"
              type="datetime-local"
              value={task.dueDate}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Assigned To (User ID)"
              name="assignedTo"
              value={task.assignedTo}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Admin Comments"
              name="adminComments"
              value={task.adminComments}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Task URL"
              name="taskUrl"
              value={task.taskUrl}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <Grid item style={{ width: "100%" }}>
              <Grid container display={"flex"} justifyContent={"space-between"}>
                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleUsersBack}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    <ArrowBackIosNewIcon />
                    <Typography marginLeft={"5px"}>back</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary"       sx={{ mt: 3, mb: 2 }}>
                    Update Task
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};



const formatDateForInput = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
export default EditTask;
