import { reAuth } from "../../firebase";
import { useFireAuthRedux } from "../../hooks";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Input from "../input";

function ReAuth({ reAuthHandler }) {
  const reAuthHook = useFireAuthRedux(reAuth);

  const handleReAuth = (e) => {
    e.preventDefault();
    reAuthHook([e.currentTarget.elements[0].value], [], {
      cb: reAuthHandler,
      getMsg: () => null,
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
}

export default ReAuth;
