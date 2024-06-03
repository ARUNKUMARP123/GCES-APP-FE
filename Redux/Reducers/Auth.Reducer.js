import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleLoginApi, handleRegistrationApi } from "../../src/api";

let User =JSON.parse(localStorage.getItem("user"));


export const register = createAsyncThunk(
    '',
    async (user, thunkAPI) => {
      try {
        const response= await handleRegistrationApi(user);
      
        if (response.data){
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        }
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  

  export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
      try {
        const response= await handleLoginApi(user);
    
        if (response.data){
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        }
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  

export const AuthSlice=createSlice({
    name:"Auth",
    initialState:{
        user: User ? User : null,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: '',
    },
    reducers:{
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = '';
          },    
          logout: (state) => {
            localStorage.removeItem('user');
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.user = null;
          },
      
          
        },
        extraReducers:(builder)=>{
            builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
     
              })
              .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.user = null;
                state.message = action.payload;
              })
              .addCase(login.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
     
              })
              .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.user = null;
                state.message = action.payload;
              })
              
        
        }

})



export const {reset,logout}=AuthSlice.actions;
export default AuthSlice.reducer;