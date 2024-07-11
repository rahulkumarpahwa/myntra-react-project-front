import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Bag from "./components/Bag";
import { createBrowserRouter, Outlet } from "react-router-dom";
import FetchItems from "./components/FetchItems";

function App() {
  return (
    <div>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);
