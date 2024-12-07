import { useDispatch, useSelector } from "react-redux";
import { useState, useLayoutEffect } from "preact/hooks";

import { openDialog } from "../../store/actions";

import Toolbar from "./toolbar";
import ProductForm from "./productForm";
import ProductsGrid from "./productsGrid";

function DashboardProducts() {
  const dispatch = useDispatch();
  const { products: stateProducts } =
    useSelector((state) => state.authedUser) || [];
  const [products, setProducts] = useState(stateProducts);

  const handleDialogOpen = (product) => {
    dispatch(
      openDialog({
        children: (
          <ProductForm
            propsValues={product}
            stateProducts={stateProducts}
            setProducts={setProducts}
          />
        ),
      })
    );
  };

  useLayoutEffect(() => setProducts(stateProducts), [stateProducts.length]);

  return (
    stateProducts && (
      <>
        <Toolbar
          setProducts={setProducts}
          stateProducts={stateProducts}
          handleDialogOpen={handleDialogOpen}
        />
        <ProductsGrid
          products={products}
          setProducts={setProducts}
          stateProducts={stateProducts}
          handleDialogOpen={handleDialogOpen}
        />
      </>
    )
  );
}

export default DashboardProducts;
