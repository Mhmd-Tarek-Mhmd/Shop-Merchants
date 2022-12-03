import { useDispatch, useSelector } from "react-redux";

import { deleteProduct } from "../../firebase";
import { useFireAuthRedux } from "../../hooks";
import { openDialog, closeDialog, update } from "../../store/actions";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNew from "@mui/icons-material/OpenInNew";

function ProductCard({ product, handleDialogOpen }) {
  const dispatch = useDispatch();
  const handleErrorDialogOpen = () => {
    dispatch(
      openDialog({
        title: "Are you sure?",
        desc: "Once you deleted a product, there is no going back. Please be certain",
        children: (
          <Confirm id={product.id} onClose={() => dispatch(closeDialog())} />
        ),
      })
    );
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardContent>
        <Box
          component="img"
          src={product.thumbnail}
          sx={{ display: "flex", justifyContent: "center", pb: 3 }}
        >
          {/* <Avatar alt="Product" src={product.thumbnail} variant="square" /> */}
        </Box>

        <Typography
          variant="h5"
          gutterBottom
          align="center"
          color="textPrimary"
        >
          {product.title}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {product.description}
        </Typography>
      </CardContent>

      <Box sx={{ flexGrow: 1 }} />
      <Divider />

      <Toolbar
        sx={{ py: 1, columnGap: 2, flexWrap: "wrap", alignItems: "center" }}
      >
        <Button
          target="__blank"
          endIcon={<OpenInNew />}
          href={`https://e-shop-aa698.web.app/product/${product.id}`}
        >
          Preview
        </Button>
        <Box sx={{ flex: 1 }} />
        <Button
          sx={{ color: "#009688" }}
          startIcon={<EditIcon />}
          onClick={() => handleDialogOpen(product)}
        >
          Edit
        </Button>
        <Button
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleErrorDialogOpen}
        >
          Delete
        </Button>
      </Toolbar>
    </Card>
  );
}

export default ProductCard;

const Confirm = ({ id, onClose }) => {
  const authedUser = useSelector((state) => state.authedUser);
  const deleteProductHook = useFireAuthRedux(deleteProduct, update);

  const handleDelete = () => {
    const products = authedUser.products.filter((prod) => prod.id !== id);
    deleteProductHook([id], [{ products }], {
      cb: onClose,
      getMsg: () => "Product deleted successfully",
    });
  };

  return (
    <Toolbar
      disableGutters
      sx={{
        top: 14,
        ml: "auto",
        width: "200px",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      <Button color="error" onClick={handleDelete}>
        Confirm
      </Button>
      <Button variant="contained" disableElevation onClick={onClose}>
        Cancel
      </Button>
    </Toolbar>
  );
};
