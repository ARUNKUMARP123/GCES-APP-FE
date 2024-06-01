import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { fetchUsersApi, handleDeleteUserApi } from '../src/api';
import {Grid,Button,Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Link from '@mui/material/Link/Link';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


export const Users = () => {

  const { user } = useSelector((state) => state.Auth); // Assume your user data is in the Auth state

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      const [createdUsers,setCreatedUsers]=useState([]);

      useEffect(()=>{
         CallGetApi();  
      },[])

      const CallGetApi=()=>{
        fetchUsersApi()
        .then((response)=>{
            response.data.user?.length &&
            setCreatedUsers(response.data?.user)})
            .catch((error)=>{
              toast.error(error.response.data.message)
              console.log(error)});
      }

     const HandleDeleteUsers= async(userid)=>{
   const response= await handleDeleteUserApi(userid);
   if(response.data.message=== "Data Delete Successful."){
    toast.success(response.data.message)
   }else{
    toast.error(response.data.message)
   }
    CallGetApi();

     }
     console.log(user)
  return (
    <div>
         {user?.user_role==="Admin" && (
        <Grid container style={{ height: '70px', alignItems: 'center' }}>
          <Grid item>
            <Link href="/create">
              <Button color='success' variant='contained'>
                <AddCircleOutlineIcon />
                <Typography textTransform={"capitalize"} marginLeft={1}>Create New User</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      )}
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>Roll_Number</StyledTableCell>
            <StyledTableCell align="right">User_Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone_Number</StyledTableCell>
            <StyledTableCell align="right">Course</StyledTableCell>
            <StyledTableCell align="right">Branch</StyledTableCell>
            <StyledTableCell align="right">Batch</StyledTableCell>
            <StyledTableCell align="right">User_Type</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {createdUsers.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="right">
                {row.rollnumber}
              </StyledTableCell>
              <StyledTableCell  align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phonenumber}</StyledTableCell>
              <StyledTableCell align="right">{row.course}</StyledTableCell>
              <StyledTableCell align="right">{row.branch}</StyledTableCell>
              <StyledTableCell align="right">{row.batch}</StyledTableCell>
              <StyledTableCell align="right">{row.usertype}</StyledTableCell>
              <Link href={`/edit/${row._id}`}>
              <StyledTableCell align="right"><Button color='warning' variant='contained'><Typography textTransform={"capitalize"}>Edit</Typography></Button></StyledTableCell>
              </Link>
              <StyledTableCell align="right"><Button color='error' variant='contained' onClick={()=>{HandleDeleteUsers(row._id)}}><Typography textTransform={"capitalize"}>Delete</Typography></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
