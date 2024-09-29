import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTrip from "./pages/CreateTrip.jsx";
import Header from "./components/custom/Header.jsx";
import { Toaster } from "./components/ui/sonner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "create-trip",
    element: <CreateTrip />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
