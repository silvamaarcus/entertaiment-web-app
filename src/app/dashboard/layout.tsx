import React from "react";
import Sidebar from "./components/Sidebar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <main className="px-6 py-8 sm:px-9">{children}</main>
    </div>
  );
};

export default Dashboard;
