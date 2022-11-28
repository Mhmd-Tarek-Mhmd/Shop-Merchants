import Router from "preact-router";

import Home from "./home";
import Account from "./account";
import NotFound from "./notFound";
import DashboardLayouts from "../../components/dashboardLayouts";

function Dashboard() {
  return (
    <>
      <DashboardLayouts />
      <Router>
        <Home path="/" />
        <Account path="/account" />
        <NotFound default />
      </Router>
    </>
  );
}

export default Dashboard;
