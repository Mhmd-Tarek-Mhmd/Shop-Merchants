import { reAuth } from "../../firebase";
import { useFireAuthRedux } from "../../hooks";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import Input from "../input";

function ReAuthModal({ isModalOpen, reAuthHandler, closeModalHandler }) {
  return (
    <Dialog
      open={isModalOpen}
      onClose={closeModalHandler}
      aria-labelledby="reauth-label"
      aria-describedby="reauth-desc"
    >
      <DialogTitle id="reauth-label">Are you sure?</DialogTitle>

      <DialogContent>
        <DialogContentText id="reauth-desc" sx={{ mb: 1.5 }}>
          Please enter your password to confirm
        </DialogContentText>

        <ReAuth reAuthHandler={reAuthHandler} />
      </DialogContent>
    </Dialog>
  );
}

export default ReAuthModal;

const ReAuth = ({ reAuthHandler }) => {
  const reAuthHook = useFireAuthRedux(reAuth);

  const handleReAuth = (e) => {
    e.preventDefault();
    reAuthHook([e.currentTarget.elements[0].value], [], {
      cb: reAuthHandler,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleReAuth}
      sx={{ display: "grid", rowGap: 2 }}
    >
      <Input
        type="password"
        label="Password"
        variant="standard"
        autoComplete="current-password"
      />
      <Button variant="outlined" type="submit">
        Confirm
      </Button>
    </Box>
  );
};
