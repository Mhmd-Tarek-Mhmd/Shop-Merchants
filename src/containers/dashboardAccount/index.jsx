import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import InfoCard from "./infoCard";
import DetailsForm from "./detailsForm";

function DashboardAccount() {
  const user = useSelector((state) => state.authedUser);

  return (
    <Grid container spacing={3}>
      <Grid item lg={4} md={6} xs={12}>
        <InfoCard user={user} />
      </Grid>

      <Grid item lg={8} md={6} xs={12}>
        <DetailsForm user={user} />
      </Grid>
    </Grid>
  );
}

export default DashboardAccount;
