import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import Logo from "../logo";

const items = [
  {
    href: "/",
    title: "Home",
    icon: <HomeIcon fontSize="small" sx={{ color: "#fff" }} />,
  },
  {
    href: "/products",
    title: "Products",
    icon: <ShoppingBagIcon fontSize="small" sx={{ color: "#fff" }} />,
  },
  {
    href: "/account",
    title: "Account",
    icon: <PersonIcon fontSize="small" sx={{ color: "#fff" }} />,
  },
  {
    href: "/settings",
    title: "Settings",
    icon: <SettingsIcon fontSize="small" sx={{ color: "#fff" }} />,
  },
];

function Sidebar({ open, onClose }) {
  return (
    <Drawer
      open={open}
      anchor="left"
      onClose={onClose}
      variant="temporary"
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      PaperProps={{
        component: "aside",
        sx: {
          pt: 4,
          width: 240,
          color: "#fff",
          backgroundColor: "rgb(17, 24, 39)",
        },
      }}
    >
      <Box sx={{ mb: 10, display: "grid", justifyContent: "center" }}>
        <Logo />
      </Box>

      <List>
        {items.map((item) => (
          <Item key={item.title} item={item} onClose={onClose} />
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;

const Item = ({ item: { href, icon, title }, ...props }) => {
  return (
    <ListItem
      {...props}
      href={href}
      component="a"
      onClick={props.onClose}
      selected={href === location.pathname}
      sx={{
        mb: 1,
        color: "inherit",
        "&:hover": { backgroundColor: "rgb(25 118 210 / 0.2)" },
        "&.Mui-selected": { backgroundColor: "rgb(25 118 210 / 0.2)" },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
};
