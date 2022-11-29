import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import Input from "../../components/input";

function ForgetPassword({ handleSubmit }) {
  return (
    <Box component="form" onSubmit={handleSubmit}>
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
  );
}

export default ForgetPassword;
