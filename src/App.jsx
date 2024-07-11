import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Bag from "./components/Bag";
import { createBrowserRouter, Outlet } from "react-router-dom";
import itemsLoader from "./utils/itemsLoader"

function App() {
  return (
    <div>
      <Header />
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
        loader: itemsLoader,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);
