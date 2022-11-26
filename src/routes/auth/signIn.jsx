import Link from "@mui/material/Link";

import Controller from "./controller";
import Input from "../../components/input";

function SignIn() {
  return <Controller prefix="in" FormInputs={Form} />;
}

export default SignIn;

const Form = ({ setIsModalOpen }) => (
  <>
    <Input
      type="email"
      name="email"
      label="Email Address"
      autoComplete="email"
    />
    <Input
      margin="normal"
      type="password"
      name="password"
      label="Password"
      autoComplete="current-password"
    />

    <Link
      type="button"
      variant="body2"
      component="button"
      onClick={() => setIsModalOpen(true)}
    >
      Forgot password?
    </Link>
  </>
);
