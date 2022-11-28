import { useDocumentTitle } from "../../hooks";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import DashboardSettings from "../../components/dashboardSettings";

function Settings() {
  useDocumentTitle("Settings");

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md" sx={{ display: "grid", rowGap: 3 }}>
        <Typography sx={{ mb: 3, fontWeight: 700 }} component="h1" variant="h4">
          Settings
        </Typography>

        <DashboardSettings />
      </Container>
    </Box>
  );
}

export default Settings;
