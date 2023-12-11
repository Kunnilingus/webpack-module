import { FC } from "react";
import {  Outlet } from "react-router-dom";

export const App: FC = () => {
  return (
    <div>
      <h1>Shop Module</h1>
      <Outlet />
    </div>
  );
};
