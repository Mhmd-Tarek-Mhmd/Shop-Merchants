import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import DashboardProducts from "../../containers/dashboardProducts";

function Products() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth={false}>
        <Typography
          component="h1"
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold" }}
        >
          Products
        </Typography>

        <DashboardProducts />
      </Container>
    </Box>
  );
}

export default Products;
