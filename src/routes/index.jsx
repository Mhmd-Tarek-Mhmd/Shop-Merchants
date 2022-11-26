import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import Auth from "./auth";

function Routes() {
  const merchant = useSelector((state) => state.authedUser);

  return (
    <Box component="main" sx={{ height: "100vh" }}>
      {!merchant ? <Auth /> : <p>Dashboard</p>}
    </Box>
  );
}

export default Routes;
