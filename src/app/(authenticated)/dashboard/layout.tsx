import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full flex-col sm:flex-row">
    <Sidebar />
    {children}
  </div>
);

export default Layout;
