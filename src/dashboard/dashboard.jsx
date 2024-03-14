import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import AppGuard from "../guard/app.guard";

export default function Dashboard() {
  return (
    <AppGuard>
      <div className="container-fluid">
        <div className="row mt-4 d-flex justify-content-between ">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </AppGuard>
  );
}
