import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import UsersPage from "./Pages/UsersPage";
import InfosPage from "./Pages/InfosPage";
import ArticlesPage from "./Pages/ArticlesPage";
import ProductsPage from "./Pages/ProductsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showHeader={true}>
              <UsersPage />
            </Layout>
          }
        />

        <Route
          path="/users"
          element={
            <Layout showHeader={true}>
              <UsersPage />
            </Layout>
          }
        />

        <Route
          path="/products"
          element={
            <Layout showHeader={true}>
              <ProductsPage />
            </Layout>
          }
        />

        <Route
          path="/articles"
          element={
            <Layout showHeader={true}>
              <ArticlesPage />
            </Layout>
          }
        />

        <Route
          path="/infos"
          element={
            <Layout showHeader={true}>
              <InfosPage />
            </Layout>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
