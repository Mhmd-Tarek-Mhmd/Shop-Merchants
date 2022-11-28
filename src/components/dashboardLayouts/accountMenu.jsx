import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "preact/hooks";

import { logout } from "../../firebase";
import { clear } from "../../store/actions";
import { useFireAuthRedux } from "../../hooks";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Tooltip from "@mui/material/Tooltip";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function AccountMenu() {
  const settingsRef = useRef(null);
  const logoutHook = useFireAuthRedux(logout, clear);
  const user = useSelector((state) => state.authedUser);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);

  useEffect(() => {
    if (openAccountPopover) document.body.style.paddingRight = 0;
  }, [openAccountPopover]);

  return (
    <>
      <Tooltip title="Account settings" arrow>
        <IconButton
          ref={settingsRef}
          aria-haspopup="true"
          sx={{ ml: { xs: 0, md: 1 } }}
          aria-expanded={open ? "true" : undefined}
          onClick={() => setOpenAccountPopover(true)}
          aria-controls={open ? "account-menu" : undefined}
        >
          <Avatar
            src={user.photoURL}
            alt={user.displayName}
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
      </Tooltip>

      <Popover
        open={openAccountPopover}
        anchorEl={settingsRef.current}
        PaperProps={{ sx: { width: "300px" } }}
        onClose={() => setOpenAccountPopover(false)}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Box sx={{ py: 1.5, px: 2 }}>
          <Typography variant="overline">Account</Typography>
          <Typography color="text.secondary" variant="body2">
            John Doe
          </Typography>
        </Box>
        <MenuList
          disablePadding
          sx={{
            "& > *": {
              "&:first-of-type": {
                borderTopColor: "divider",
                borderTopStyle: "solid",
                borderTopWidth: "1px",
              },
              padding: "12px 16px",
            },
          }}
        >
          <MenuItem onClick={() => logoutHook()}>Sign out</MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}

export default AccountMenu;
