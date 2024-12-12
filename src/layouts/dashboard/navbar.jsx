import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";

import AccountMenu from "./accountMenu";

function DashboardNavbar({ onSidebarOpen }) {
  return (
    <AppBar position="static" component="nav" sx={{ backgroundColor: "#fff" }}>
      <Toolbar disableGutters sx={{ px: 2, left: 0, minHeight: 64 }}>
        <IconButton
          onClick={onSidebarOpen}
          sx={{ display: { xs: "inline-flex", lg: "none" } }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Tooltip title="Notifications">
          <IconButton sx={{ ml: 1 }}>
            <Badge badgeContent={4} color="primary" variant="dot">
              <NotificationsIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>

        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
}

export default DashboardNavbar;
