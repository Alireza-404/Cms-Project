import { configureStore } from "@reduxjs/toolkit";
import FieldSlice from "./Slices/FieldSlice";
import UsersSlice from "./Slices/UsersSlice";
import CoursesSlice from "./Slices/ProductsSlice";
import ArticlesSlice from "./Slices/ArticlesSlice";

const Store = configureStore({
  reducer: {
    field: FieldSlice,
    users: UsersSlice,
    products: CoursesSlice,
    articles: ArticlesSlice,
  },
});

export default Store;
