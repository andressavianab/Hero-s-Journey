import { Outlet } from "react-router-dom";
import "./Default.css";

import { Header } from "../components/Header";

export const Default = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <Outlet />
      </div>
    </>
  );
};
