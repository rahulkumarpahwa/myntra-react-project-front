import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Bag from "./components/Bag";
import { createBrowserRouter, Outlet } from "react-router-dom";
import FetchItems from "./components/FetchItems";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";

function App() {
  const { currentlyFetching } = useSelector((store) => store.fetchStatus);
  return (
    <div>
      <Header />
      <FetchItems />
      {currentlyFetching ? <Loading></Loading> : <Outlet />}
      <Footer />
      <Toaster />
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
