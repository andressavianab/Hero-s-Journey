import { Outlet } from "react-router-dom";
import "./Default.css";

export const Default = () => {
  return (
    <>
      <header className="h-16 flex bg-white">
        <h1>Hero's Journey.</h1>
        <form action="">
          <input type="text" className="bg-slate-400"/>
        </form>
      </header>
      <div className="layout">
        <Outlet />
      </div>
    </>
  );
};