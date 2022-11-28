import Router from "preact-router";

import NotFound from "./notFound";
import DashboardLayouts from "../../components/dashboardLayouts";

function Dashboard() {
  return (
    <>
      <DashboardLayouts />
      <Router>
        <NotFound default />
      </Router>
    </>
  );
}

export default Dashboard;
