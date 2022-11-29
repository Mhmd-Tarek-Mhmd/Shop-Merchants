import Grid from "@mui/material/Grid";

import Controller from "./controller";
import Input from "../../components/input";

function SignUp({ setIsSignUp }) {
  return <Controller prefix="up" FormInputs={Form} setIsSignUp={setIsSignUp} />;
}

export default SignUp;

const Form = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <Input name="firstName" label="First Name" autoComplete="given-name" />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Input name="lastName" label="Last Name" autoComplete="family-name" />
    </Grid>
    <Grid item xs={12}>
      <Input
        type="email"
        name="email"
        label="Email Address"
        autoComplete="email"
      />
    </Grid>
    <Grid item xs={12}>
      <Input
        type="password"
        name="password"
        label="Password"
        autoComplete="new-password"
      />
    </Grid>
  </Grid>
);
