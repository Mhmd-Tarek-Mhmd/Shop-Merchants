import { useDispatch } from "react-redux";

import { update } from "../../store/actions";
import { updateAvatar } from "../../firebase";
import { useFireAuthRedux } from "../../hooks";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { visuallyHidden } from "@mui/utils";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function InfoCard({ user }) {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={user.photoURL}
            alt={user.displayName}
            sx={{ height: 64, mb: 2, width: 64 }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="textPrimary"
          >
            {user.displayName}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.email}
          </Typography>
        </Box>
      </CardContent>

      <Divider />
      <CardActions>
        <ImageUploader />
      </CardActions>
    </Card>
  );
}

export default InfoCard;

const ImageUploader = () => {
  const dispatch = useDispatch();
  const changeAvatarHook = useFireAuthRedux(updateAvatar);

  const handleChange = (e) => {
    if (e.target.files.length) {
      changeAvatarHook(
        [e.target.files[0], (photoURL) => dispatch(update({ photoURL }))],
        [],
        { getMsg: () => "Avatar changed successfully" }
      );
    }
  };

  return (
    <Button component="label" color="primary" fullWidth variant="text">
      Upload picture
      <TextField
        type="file"
        sx={visuallyHidden}
        onChange={handleChange}
        inputProps={{ accept: "image/*" }}
      />
    </Button>
  );
};
