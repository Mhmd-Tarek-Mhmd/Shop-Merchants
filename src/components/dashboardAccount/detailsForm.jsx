import { useState } from "preact/hooks";
import { useFireAuthRedux } from "../../hooks";

import { updateName } from "../../firebase";
import { update } from "../../store/actions";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

function DetailsForm({ user }) {
  const updateNameHook = useFireAuthRedux(updateName, update);
  const [values, setValues] = useState({
    firstName: user.displayName.split(" ")[0],
    lastName: user.displayName.split(" ")[1],
  });

  const handleChange = ({ target }) =>
    setValues({ ...values, [target.name]: target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${values.firstName} ${values.lastName}`;
    updateNameHook([displayName], [{ displayName }]);
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                name="firstName"
                label="First name"
                variant="outlined"
                onChange={handleChange}
                value={values.firstName}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                name="lastName"
                label="Last name"
                variant="outlined"
                onChange={handleChange}
                value={values.lastName}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                label="Phone Number"
              />
            </Grid>
          </Grid>
        </CardContent>

        <Divider />
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Button type="submit" color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
}

export default DetailsForm;
