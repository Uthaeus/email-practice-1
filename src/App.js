import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import Home from "./pages/home";
import Contact from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <h1>Hello</h1>
  );
}

export default App;
