import { useState } from "preact/hooks";
import { useDocumentTitle } from "../../hooks";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

import SignUp from "./signUp";
import SignIn from "./signIn";
import Logo from "../../components/logo";

function Auth() {
  useDocumentTitle("Welcome");
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <>
      <Nav />
      <Box
        sx={{
          minHeight: 500,
          height: "100vh",
          display: "grid",
          placeItems: "center",
          position: "relative",
          backgroundColor: "grey.100",
        }}
      >
        <Box
          sx={{
            px: 3,
            pb: "40px",
            pt: "100px",
            width: "100%",
            maxWidth: 500,
            borderRadius: 1,
            position: "relative",
            backgroundColor: "background.default",
          }}
        >
          <Tabs isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
          {isSignUp ? <SignUp /> : <SignIn />}
        </Box>
      </Box>
    </>
  );
}

export default Auth;

const Nav = () => (
  <Box
    component="nav"
    sx={{
      p: 3,
      height: 100,
      backgroundColor: "background.default",
    }}
  >
    <Logo />
  </Box>
);

const Tabs = ({ isSignUp, setIsSignUp }) => (
  <Toolbar
    disableGutter
    sx={{
      top: 0,
      mt: "-8px",
      left: "-24px",
      position: "absolute",
      width: "calc(100% + 48px)",
    }}
  >
    <Tab
      isActive={isSignUp}
      innerTxt="Sign up"
      onClick={() => setIsSignUp(true)}
    />
    <Tab
      isActive={!isSignUp}
      innerTxt="Sign in"
      onClick={() => setIsSignUp(false)}
    />
  </Toolbar>
);

const Tab = ({ isActive, innerTxt, ...props }) => (
  <Button
    {...props}
    disabled={isActive}
    sx={{
      height: 48,
      width: "50%",
      color: isActive && "#222 !important",
      backgroundColor: isActive ? "transparent" : "grey.100",
    }}
  >
    {innerTxt}
  </Button>
);
