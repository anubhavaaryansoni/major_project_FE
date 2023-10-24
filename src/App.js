import Navbar from "./comonents/navbar/navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./comonents/footer/footer.js";
import Ttoimg from "./pages/texttoimg/ttoimg";
import  Login  from "./login/login";
import Prebuilt from "./comonents/prebuilt/prebuilt";
import { Img } from "./comonents/prebuilt/gigcard/gigcard";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/texttoimg",
          element: <Ttoimg />,
        },
        {
          path: "/prebuilt",
          element: <Prebuilt />,
        },
        {
          path: "/image",
          element: <Img />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
