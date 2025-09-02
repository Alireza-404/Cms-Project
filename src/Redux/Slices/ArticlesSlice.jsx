import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetArticlesFromServer = createAsyncThunk(
  "Articles/GetArticlesFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "An Error Occurred While Retrieving Articles From The Server."
          );
        }

        return res.json();
      })
      .then((data) => data);
  }
);

export const RemoveArticleFromServer = createAsyncThunk(
  "Articles/RemoveArticleFromServer",
  async (url) => {
    return fetch(url, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "An Error Occurred While Retrieving Article From The Server."
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
  name: "Articles",
  initialState: {
    articlesArray: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetArticlesFromServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(GetArticlesFromServer.fulfilled, (state, action) => {
      state.articlesArray = action.payload.posts;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(GetArticlesFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(RemoveArticleFromServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(RemoveArticleFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      const newState = state.articlesArray.filter(
        (article) => article.id !== action.payload.id
      );
      state.articlesArray = newState;
    });
    builder.addCase(RemoveArticleFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default Slice.reducer;
