import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { TextField, Box } from "@mui/material";
import { useState } from "react";
import { handleCreateTaskApi } from "../src/api";

export const CreateTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    assignedTo: "",
    status: "Pending",
    adminComments: "",
    taskUrl: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await handleCreateTaskApi(task);
    console.log(response);
    navigate("/task");
  };

  const navigate = useNavigate();

  const handleUsersBack = () => {
    navigate("/task");
  };

  console.log(task);
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
            <Typography variant="h5">Create Task</Typography>
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
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create Task
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
