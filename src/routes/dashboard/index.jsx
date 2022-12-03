import Router from "preact-router";

import Home from "./home";
import Account from "./account";
import Settings from "./settings";
import Products from "./products";
import NotFound from "./notFound";
import DashboardLayouts from "../../components/dashboardLayouts";

function Dashboard() {
  return (
    <>
      <DashboardLayouts />
      <Router>
        <Home path="/" />
        <Account path="/account" />
        <Settings path="/settings" />
        <Products path="/products" />
        <NotFound default />
      </Router>
    </>
  );
}

export default Dashboard;
