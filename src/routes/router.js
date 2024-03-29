import { Outlet } from "react-router-dom";
import UsersContextProvider from "../Contexts/UsersContexts";
import Header from "../components/Header";
import CreatePage from "../pages/CreatePage";
import DoneTasksPage from "../pages/DoneTasksPage";
import MainPage from "../pages/MainPage";
import UpdatePage from "../pages/UpdatePage";
import LangContextProvider from "../Contexts/LangContext";

const routes = [
  {
    element: (
      <div>
        <LangContextProvider>
          <Header />,
          <Outlet />
        </LangContextProvider>
      </div>
    ),
    path: "/",
    children: [
      {
        element: (
          <div>
            <UsersContextProvider>
              <MainPage />
              <p>Divider</p>
              <MainPage />
            </UsersContextProvider>
          </div>
        ),
        index: true,
      },

      { element: <CreatePage />, path: "create" },

      {
        element: <UpdatePage />,
        path: "update/:userId",
        // path: "/update/:iId",
      },

      {
        element: <DoneTasksPage />,
        path: "DoneTasksPage",
      },
    ],
  },
];

export default routes;
