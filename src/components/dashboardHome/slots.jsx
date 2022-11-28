import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";

import MoneyIcon from "@mui/icons-material/Money";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Slots() {
  return (
    <Grid container spacing={3}>
      {slots.map((slot) => (
        <Grid key={slot.title} item lg={3} sm={6} xl={3} xs={12}>
          <Slot slot={slot} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Slots;

const slots = [
  {
    title: "budget",
    num: "$24k",
    color: "error",
    icon: <MoneyIcon />,
    children: (
      <Box sx={{ pt: 2, display: "flex", alignItems: "center" }}>
        <ArrowDownwardIcon color="error" />
        <Typography color="error" sx={{ mr: 1 }} variant="body2">
          12%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    ),
  },
  {
    title: "total customers",
    num: "1.6k",
    color: "success",
    icon: <PeopleIcon />,
    children: (
      <Box sx={{ alignItems: "center", display: "flex", pt: 2 }}>
        <ArrowUpwardIcon color="success" />
        <Typography variant="body2" sx={{ mr: 1 }}>
          16%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    ),
  },
  {
    title: "tasks progress",
    num: "75.5%",
    color: "warning",
    icon: <InsertChartIcon />,
    children: (
      <Box sx={{ pt: 3 }}>
        <LinearProgress value={75.5} variant="determinate" />
      </Box>
    ),
  },
  {
    title: "total profits",
    num: "$23k",
    color: "primary",
    icon: <AttachMoneyIcon />,
  },
];

const Slot = ({ slot: { title, num, color, icon, children } }) => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <Grid item>
          <Typography gutterBottom variant="overline" color="text.secondary">
            {title}
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {num}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{ height: 56, width: 56, backgroundColor: `${color}.main` }}
          >
            {icon}
          </Avatar>
        </Grid>
      </Grid>

      {children}
    </CardContent>
  </Card>
);
