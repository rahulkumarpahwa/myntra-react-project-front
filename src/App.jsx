import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Bag from "./components/Bag";
import { createBrowserRouter, Outlet } from "react-router-dom";
import {Provider} from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}  >
      <Header />
      <Outlet />
      <Footer />
    </Provider>
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
