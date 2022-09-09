import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  user?: string;
  token?: string;
}
type LoginProps = {
  email: string;
  password: string;
};

type SignupProps = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
const initialState: AuthState = {
  user: "",
  //    loading: false,
  token: "",
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
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action, state);
      state.user = action.payload;
      state.token = action.payload.encodedToken;
    });
  },
});

export default authSlice.reducer;
