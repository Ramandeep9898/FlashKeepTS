import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  user?: string;
  token?: string | null;
}
type LoginProps = {
  email: string;
  password: string;
};

type SignupProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
const initialState: AuthState = {
  user: "",
  token: localStorage.getItem("flashNotesToken")
    ? localStorage.getItem("flashNotesToken")
    : "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (loginDetails: LoginProps) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginDetails.email,
        password: loginDetails.password,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/sign",
  async (signupDetails: SignupProps) => {
    try {
      console.log(signupDetails);
      const response = await axios.post(
        "/api/auth/signup",
        JSON.stringify(signupDetails)
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("flashNotesToken", action.payload.encodedToken);
        state.user = action.payload;
        state.token = action.payload.encodedToken;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        localStorage.setItem("flashNotesToken", action.payload.encodedToken);
        state.user = action.payload;
        state.token = action.payload.encodedToken;
      });
  },
});

export default authSlice.reducer;
