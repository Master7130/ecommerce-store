import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Customers from "./pages/Customers.tsx";
import Products from "./pages/products/Products.tsx";
import Add from "./pages/products/Add.tsx";
import Layout from "./components/Layout.tsx";
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/add",
    element: <Add />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Layout>
  </React.StrictMode>
);
