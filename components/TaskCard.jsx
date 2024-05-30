import { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, TextField, Select, MenuItem,Box } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';




const TaskCard = ({ task, isAdmin, handleEdit, handleDelete, handleStatusChange, handleMarksChange, handleSubmitUrl,handleCommentChange,handleSubmitComment}) => {


  const [submissionUrl, setSubmissionUrl] = useState('');
  const [marks, setMarks] = useState(task.marks || '');

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" >{task.title}</Typography>
        <Typography color="textSecondary">Description:{task.description}</Typography>
        <Typography color="textSecondary">Due: {formatDateForInput(task.dueDate).toLocaleString()}</Typography>
        <Typography color="textSecondary">Assigned To: {task.assignedTo}</Typography>
        <Box>

          <Typography color="textSecondary">Task URL: <a href={task.taskUrl} target="_blank" rel="noopener noreferrer" >{task.taskUrl} </a></Typography>
          <Typography color="textSecondary">Submission URL:<a href={task.submissionUrl} target="_blank" rel="noopener noreferrer">{task.submissionUrl || 'Not submitted yet'}</a> </Typography>
          {isAdmin!=="Admin" && (
            <Box>
              <TextField
                label="Submission URL"
                value={submissionUrl}
                onChange={(e) => setSubmissionUrl(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSubmitUrl(task._id, submissionUrl)}
              >
                Submit
              </Button>
            </Box>
          )}
        </Box>
        <Box>
         
          {isAdmin==="Admin" && (
            <>
            <Typography>Status:</Typography>
            <Select
              value={task.status}
              onChange={(e) => handleStatusChange(task._id, e.target.value)}
              fullWidth
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
            </>
             
          )  }
          {isAdmin!=="Admin" && ((
            <Typography>Status:{task.status}</Typography>
          ))}
        </Box>
        {isAdmin==="Admin" && (
          <Box>
            <Typography>Marks:</Typography>
            <TextField
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              onBlur={() => handleMarksChange(task._id, marks)}
              fullWidth
              margin="normal"
            />
          </Box>
        )}
        {isAdmin!=="Admin" &&(<Typography>marks:{task.marks}</Typography>)}

        <Typography variant="body2" component="p">
                Admin Comments: {task.adminComments}
              </Typography>
              <Typography variant="body2" component="p">
                Student Comments: {task.studentComments}
              </Typography>
              {isAdmin === 'Admin' && (
                <TextField
                  label="Admin Comments"
                  name="adminComments"
                  value={task.adminComments}
                  onChange={(e) => handleCommentChange(task._id, 'adminComments', e.target.value)}
                  fullWidth
                  margin="normal"
                />
              )}
              {isAdmin !== 'Admin' && (
                <TextField
                  label="Student Comments"
                  name="studentComments"
                  value={task.studentComments}
                  onChange={(e) => handleCommentChange(task._id, 'studentComments', e.target.value)}
                  fullWidth
                  margin="normal"
                />
              )}
      </CardContent>
     
        <CardActions>
        {isAdmin === 'Admin' && (
                <>
                  <Button size="small" variant='contained' color="primary" onClick={() => handleSubmitComment(task._id, 'adminComments')}>
                    Submit Comment
                  </Button>
                  <Button size="small" variant='contained' color="primary" startIcon={<EditIcon />} onClick={() => handleEdit(task._id)}>
                    Edit
                  </Button>
                  <Button size="small" variant='contained' color="secondary" startIcon={<DeleteIcon />} onClick={() => handleDelete(task._id)}>
                    Delete
                  </Button>
                </>
              )}
              {isAdmin !== 'Admin' && (
                <>
                  <Button size="small" variant='contained' color="primary" onClick={() => handleSubmitComment(task._id, 'studentComments')}>
                    Submit Comment
                  </Button>
                </>
              )}
        </CardActions>
      
    </Card>
  );
};


const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}-${month}-${year}T${hours}:${minutes}`;
  };




  TaskCard.propTypes = {
    task: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      dueDate: PropTypes.string.isRequired,
      assignedTo: PropTypes.string,
      taskUrl: PropTypes.string,
      submissionUrl: PropTypes.string,
      status: PropTypes.string.isRequired,
      marks: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      adminComments: PropTypes.string,
      studentComments: PropTypes.string,
    }).isRequired,
    isAdmin: PropTypes.string.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleStatusChange: PropTypes.func.isRequired,
    handleMarksChange: PropTypes.func.isRequired,
    handleSubmitUrl: PropTypes.func.isRequired,
    handleCommentChange: PropTypes.func.isRequired,
    handleSubmitComment: PropTypes.func.isRequired,
  };
export default TaskCard;


