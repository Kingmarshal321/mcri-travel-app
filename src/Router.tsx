import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExamplePage from "./pages/ExamplePage/ExamplePage";
import SightSeeingPage from "./pages/ExamplePage/SightseeingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "example",
    element: <ExamplePage />,
  },
  // {
  //   path: "packing",
  //   element: <PackingList />,
  // },
  // {
  //   path: "flights",
  //   element: <FlightInfo />,
  // },
  {
    path: "sightseeing",
    element: <SightSeeingPage />,
      },
]);
