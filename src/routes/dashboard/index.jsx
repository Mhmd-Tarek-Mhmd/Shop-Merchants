import Router from "preact-router";

import Home from "./home";
import NotFound from "./notFound";
import DashboardLayouts from "../../components/dashboardLayouts";

function Dashboard() {
  return (
    <>
      <DashboardLayouts />
      <Router>
        <Home path="/" />
        <NotFound default />
      </Router>
    </>
  );
}

export default Dashboard;
