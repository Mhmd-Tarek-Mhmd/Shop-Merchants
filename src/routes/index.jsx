import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

function Routes() {
  const merchant = useSelector((state) => state.authedUser);

  return (
    <Box component="main" sx={{ height: "100vh" }}>
      {!merchant ? <p>Auth</p> : <p>Dashboard</p>}
    </Box>
  );
}

export default Routes;
