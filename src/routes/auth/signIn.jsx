import { useDispatch } from "react-redux";

import { openDialog } from "../../store/actions";

import Link from "@mui/material/Link";

import Controller from "./controller";
import Input from "../../components/input";
import ForgetPassword from "./forgetPassword";

function SignIn() {
  return <Controller prefix="in" FormInputs={Form} />;
}

export default SignIn;

const Form = ({ handleForgetSubmit }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      openDialog({
        title: "Forget your password?",
        desc: "Enter your email to rest your password",
        cb: handleForgetSubmit,
        Form: ForgetPassword,
      })
    );
  };

  return (
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
        onClick={handleClick}
      >
        Forgot password?
      </Link>
    </>
  );
};
