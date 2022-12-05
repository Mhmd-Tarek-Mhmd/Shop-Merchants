import { useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";

import { useFireAuthRedux } from "../../hooks";
import { update, closeDialog } from "../../store/actions";
import { addProduct, updateProduct } from "../../firebase";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";

const categories = [
  "decoration",
  "fragrances",
  "groceries",
  "laptops",
  "skincare",
  "smartphones",
];

function ProductForm({ propsValues, stateProducts, setProducts }) {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.authedUser);
  const productHook = useFireAuthRedux(
    propsValues ? updateProduct : addProduct
  );
  const [values, setValues] = useState(
    propsValues || {
      title: "",
      category: "",
      price: 10,
      discount: 0,
      quantity: 1,
      thumbnail: "",
      images: "",
      description: "",
    }
  );

  const handleChange = ({ target }, customVal) => {
    const value = target.type === "number" ? +target.value : target.value;
    setValues({
      ...values,
      [target.name]: customVal ? customVal : value,
    });
  };

  const cb = (prod) => {
    const products = propsValues
      ? stateProducts.map((product) =>
          product.id === propsValues.id ? prod : product
        )
      : [...stateProducts, prod];

    setProducts(products);
    dispatch(update({ products }));
    dispatch(closeDialog());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const getRandom = (max) => Math.floor(Math.random() * max);
    const newProduct = {
      ...values,
      reviews: [],
      rating: { rate: getRandom(5), count: getRandom(100) },
    };

    propsValues
      ? productHook([values, cb], [], {
          getMsg: () => "Product edited successfully",
        })
      : productHook([uid, newProduct, cb], [], {
          getMsg: () => "Product added successfully",
        });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          sx={{ m: 0 }}
          component="h2"
          subheader="Full information below"
          title={`${propsValues ? "Edit" : "Add"} a product`}
        />
        <Divider />

        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                name="title"
                label="Title"
                variant="outlined"
                value={values.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl required fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  name="category"
                  label="category"
                  labelId="category-label"
                  value={values.category}
                  onChange={(e) => handleChange(e)}
                  sx={{ textTransform: "capitalize" }}
                >
                  {categories.map((category) => (
                    <MenuItem
                      value={category}
                      sx={{ textTransform: "capitalize" }}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                required
                fullWidth
                type="number"
                name="price"
                label="Price"
                variant="outlined"
                value={values.price}
                onChange={handleChange}
                inputProps={{ min: 10 }}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField
                required
                fullWidth
                type="number"
                name="discount"
                variant="outlined"
                value={values.discount}
                onChange={handleChange}
                label="Discount percentage"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField
                required
                fullWidth
                type="number"
                name="quantity"
                label="Quantity"
                variant="outlined"
                value={values.quantity}
                onChange={handleChange}
                inputProps={{ min: 1 }}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="file"
                name="thumbnail"
                variant="outlined"
                value={values.thumbnail}
                helperText="Add main thumbnail"
                required={!Boolean(propsValues)}
                inputProps={{ accept: "image/*" }}
                onChange={(e) => handleChange(e, e.target.files[0])}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="file"
                name="images"
                variant="outlined"
                value={values.images}
                helperText="Add up to 5 images"
                required={!Boolean(propsValues)}
                inputProps={{ accept: "image/*", multiple: true }}
                onChange={(e) => handleChange(e, [...e.target.files])}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                name="description"
                variant="outlined"
                onChange={handleChange}
                value={values.description}
                label="Product description"
              />
            </Grid>
          </Grid>
        </CardContent>

        <Divider />
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Button type="submit" color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
}

export default ProductForm;
