import { useDispatch, useSelector } from "react-redux";

import { deleteProduct } from "../../firebase";
import { useFireAuthRedux } from "../../hooks";
import { openDialog, closeDialog, update } from "../../store/actions";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNew from "@mui/icons-material/OpenInNew";
import DialogActions from "@mui/material/DialogActions";

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
      <CardMedia
        height="100"
        component="img"
        alt={product.title}
        image={product.thumbnail}
        sx={{ mx: "auto", pt: "15px", width: "auto", maxWidth: "100%" }}
      />
      <CardContent>
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

      <CardActions>
        <Button
          size="small"
          target="__blank"
          endIcon={<OpenInNew />}
          href={`https://e-shop-aa698.web.app/product/${product.id}`}
        >
          Preview
        </Button>
        <Box sx={{ flex: 1 }} />
        <Button
          size="small"
          sx={{ color: "#009688" }}
          startIcon={<EditIcon />}
          onClick={() => handleDialogOpen(product)}
        >
          Edit
        </Button>
        <Button
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleErrorDialogOpen}
        >
          Delete
        </Button>
      </CardActions>
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
    <DialogActions>
      <Button color="error" onClick={handleDelete}>
        Confirm
      </Button>
      <Button variant="contained" disableElevation onClick={onClose}>
        Cancel
      </Button>
    </DialogActions>
  );
};
