import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetUsersFromServer = createAsyncThunk(
  "Users/GetUsersFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "An Error Occurred While Retrieving Users From The Server."
          );
        }

        return res.json();
      })
      .then((data) => data);
  }
);

export const RemoveUserFromServer = createAsyncThunk(
  "Users/RemoveUsersFromServer",
  async (url) => {
    return fetch(url, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "An Error Occurred While Retrieving User From The Server."
          );
        }

        return res.text();
      })
      .then((text) => {
        if (!text) return {};
        return JSON.parse(text);
      });
  }
);

const Slice = createSlice({
  name: "Users",
  initialState: {
    usersArray: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetUsersFromServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(GetUsersFromServer.fulfilled, (state, action) => {
      state.usersArray = action.payload.users;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(GetUsersFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Error . Please Try Agin Later";
    });
    builder.addCase(RemoveUserFromServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(RemoveUserFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      state.usersArray = state.usersArray.filter(
        (user) => user.id !== action.payload.id
      );
    });
    builder.addCase(RemoveUserFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default Slice.reducer;
