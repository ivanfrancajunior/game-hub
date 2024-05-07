import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import { createBrowserRouter } from "react-router-dom";
import GameDetails from "./pages/GameDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/games/:id", element: <GameDetails /> },
    ],
  },
]);

export default router;
