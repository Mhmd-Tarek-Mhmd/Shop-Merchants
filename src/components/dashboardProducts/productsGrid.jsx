import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Pagination from "@mui/material/Pagination";

import ProductCard from "./productCard";

function ProductsGrid({ products, stateProducts, handleDialogOpen }) {
  return Boolean(products.length && stateProducts.length) ? (
    <>
      <Box sx={{ pt: 4 }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} md={4} sm={6} xs={12}>
              <ProductCard
                product={product}
                products={products}
                handleDialogOpen={handleDialogOpen}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
        <Pagination color="primary" count={3} size="small" />
      </Box>
    </>
  ) : (
    <Alert severity="warning" sx={{ mt: 4, mx: "auto", maxWidth: 300 }}>
      {!stateProducts.length ? "No products added yet" : "No products matched"}
    </Alert>
  );
}

export default ProductsGrid;
