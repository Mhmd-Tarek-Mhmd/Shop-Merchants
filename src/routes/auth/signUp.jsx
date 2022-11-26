import Grid from "@mui/material/Grid";

import Controller from "./controller";
import Input from "../../components/input";

function SignUp() {
  return <Controller prefix="up" FormInputs={Form} />;
}

export default SignUp;

const Form = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <Input
        fullWidth={false}
        name="firstName"
        label="First Name"
        autoComplete="given-name"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Input
        fullWidth={false}
        name="lastName"
        label="Last Name"
        autoComplete="family-name"
      />
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
