import { useDocumentTitle } from "../../hooks";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import DashboardHome from "../../components/dashboardHome";

function Home() {
  useDocumentTitle("Home");

  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth={false}>
        <DashboardHome />
      </Container>
    </Box>
  );
}

export default Home;
