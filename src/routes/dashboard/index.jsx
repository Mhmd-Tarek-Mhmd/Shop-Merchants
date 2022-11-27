import Router from "preact-router";

import NotFound from "./notFound";

function Dashboard() {
  return (
    <Router>
      <NotFound default />
    </Router>
  );
}

export default Dashboard;
