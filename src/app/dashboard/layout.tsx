import React from "react";
import Sidebar from "./components/Sidebar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Dashboard;
