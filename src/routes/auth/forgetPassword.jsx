import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Input from "../../components/input";

function ForgetModalForm({ isModalOpen, setIsModalOpen, handleModalSubmit }) {
  return (
    <Modal
      open={isModalOpen}
      aria-labelledby="modal-title"
      onClose={() => setIsModalOpen(false)}
      sx={{ display: "grid", placeItems: "center" }}
    >
      <Box
        sx={{
          p: 5,
          borderRadius: 2,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Forget your password?
        </Typography>
        <Box component="form" onSubmit={handleModalSubmit}>
          <Input
            type="email"
            name="email"
            margin="normal"
            label="Email Address"
            autoComplete="email"
          />
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ForgetModalForm;
