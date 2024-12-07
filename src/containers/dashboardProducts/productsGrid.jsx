import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

import ProductCard from "./productCard";

function ProductsGrid({ products, stateProducts, handleDialogOpen }) {
  return Boolean(products.length && stateProducts.length) ? (
    <Grid container spacing={3} pt={4}>
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
  ) : (
    <Alert severity="warning" sx={{ mt: 4, mx: "auto", maxWidth: 300 }}>
      {!stateProducts.length ? "No products added yet" : "No products matched"}
    </Alert>
  );
}

export default ProductsGrid;
