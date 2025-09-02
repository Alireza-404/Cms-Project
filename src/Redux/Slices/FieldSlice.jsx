import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "Field",
  initialState: {
    // Information Page
    userName: "",
    firstName: "",
    lastName: "",
    currentPassword: "",
    confirmPassword: "",
    newPassword: "",
    email: "",
    isUserNameValueTrue: false,
    isFirstNameValueTrue: false,
    isLastNameValueTrue: false,
    isCurrentPasswordValueTrue: false,
    isConfirmPasswordValueTrue: false,
    isNewPasswordValueTrue: false,
    isEmailValueTrue: false,

    // Product Page Edit Modal
    productTitleForEdit: "",
    productBodyForEdit: "",
    isProductTitleForEditTrue: false,
    isProductBodyForEditTrue: false,

    // Product Page Add Product Modal
    productTitleForAdd: "",
    productBodyForAdd: "",
    productCategoryForAdd: "",
    productPriceForAdd: "",
    productImageForAdd: null,
    isProductTitleForAddTrue: false,
    isProductBodyForAddTrue: false,
    isProductCategoryForAddTrue: false,
    isProductPriceForAddTrue: false,

    // Users Page SearchBar
    searchBar: "",
  },
  reducers: {
    SetField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    ClearField: (state, action) => {
      const field = action.payload.field;
      state[field] = "";
    },
  },
});

export const { SetField, ClearField } = Slice.actions;
export default Slice.reducer;
