import { useState } from "preact/hooks";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

const DashboardLayouts = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default DashboardLayouts;
