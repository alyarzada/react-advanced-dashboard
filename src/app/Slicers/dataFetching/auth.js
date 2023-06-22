import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuth: false,
  getDataStatus: "loading",
  userTheme: null,
};

export const loginHandler = createAsyncThunk(
  "auth/loginHandler",
  async (data) => {
    try {
      const response = await axios.post(BASE_URL + "auth", data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const getUserDataHandler = createAsyncThunk(
  "auth/getUserDataHandler",
  async (data) => {
    try {
      const response = await axios.get(BASE_URL + "auth", {
        headers: { token: data },
      });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const logoutHandler = createAsyncThunk(
  "auth/logoutHandler",
  async (data) => {
    try {
      const response = await axios.delete(BASE_URL + "auth", {
        headers: { token: data },
      });
      return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const updateUser = createAsyncThunk("auth/updateUser", async (data) => {
  try {
    const response = await axios.patch(BASE_URL + "auth", data.body, {
      headers: { token: data.token },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginHandler.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loginHandler.fulfilled,
        (state, { payload: { success, token, message } }) => {
          if (success === true) {
            state.loading = false;
            state.isAuth = true;
            Cookies.set("token", token, { expires: 7 });
          } else {
            state.isAuth = false;
            state.loading = false;
          }
        }
      )
      .addCase(loginHandler.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      })
      .addCase(getUserDataHandler.pending, (state) => {
        state.getDataStatus = "loading";
      })
      .addCase(
        getUserDataHandler.fulfilled,
        (state, { payload: { user_data } }) => {
          state.getDataStatus = "succeeded";
          state.user = user_data;
        }
      )
      .addCase(getUserDataHandler.rejected, (state, { payload: { error } }) => {
        state.getDataStatus = "failed";
        state.error = error.message;
      })
      .addCase(logoutHandler.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutHandler.fulfilled, (state) => {
        state.loading = false;
        state.isAuth = false;
        Cookies.remove("token");
      })
      .addCase(logoutHandler.rejected, (state, { payload: { error } }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload: { user_data } }) => {
        state.loading = false;
        state.user = user_data;
      })
      .addCase(updateUser.rejected, (state, { payload: { error } }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
