import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetProductsFromServer = createAsyncThunk(
  "Products/GetProductsFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "An Error Occurred While Retrieving Products From The Server."
          );
        }

        return res.json();
      })
      .then((data) => data);
  }
);

export const RemoveProductFromServer = createAsyncThunk(
  "Products/RemoveProductsFromServer",
  async (url) => {
    return fetch(url, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "An Error Occurred While Retrieving Product From The Server."
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

export const UpdateProductOnServer = createAsyncThunk(
  "Products/UpdateProductOnServer",
  async ({ url, productData }) => {
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("An Error Occurred While Updating The User.");
      }

      return res.json();
    });
  }
);

export const AddProductToServer = createAsyncThunk(
  "Products/AddProductToServer",
  async ({ url, productData }) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("An Error Occurred While Creating The User.");
      }

      return res.json();
    });
  }
);

const Slice = createSlice({
  name: "Products",
  initialState: {
    productsArray: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get Products
    builder.addCase(GetProductsFromServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(GetProductsFromServer.fulfilled, (state, action) => {
      state.productsArray = action.payload.products;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(GetProductsFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Remove Product
    builder.addCase(RemoveProductFromServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(RemoveProductFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      const newState = state.productsArray.filter(
        (product) => product.id !== action.payload.id
      );
      state.productsArray = newState;
    });
    builder.addCase(RemoveProductFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Update Product
    builder.addCase(UpdateProductOnServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(UpdateProductOnServer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      const index = state.productsArray.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.productsArray[index] = action.payload;
      }
    });
    builder.addCase(UpdateProductOnServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Add Product
    builder.addCase(AddProductToServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(AddProductToServer.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = null;
      state.productsArray.push(action.payload);
    });
    builder.addCase(AddProductToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default Slice.reducer;
