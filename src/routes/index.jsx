import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import Auth from "./auth";
import Dashboard from "./dashboard";

function Routes() {
  const merchant = useSelector((state) => state.authedUser);

  return (
    <Box component="main" sx={{ height: "100vh" }}>
      {!merchant ? <Auth /> : <Dashboard />}
    </Box>
  );
}

export default Routes;
