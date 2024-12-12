import { useDocumentTitle } from "../../hooks";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import DashboardAccount from "../../containers/dashboardAccount";

function Account() {
  useDocumentTitle("Account");

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 3, fontWeight: "bold" }}
        >
          Account
        </Typography>

        <DashboardAccount />
      </Container>
    </Box>
  );
}

export default Account;
