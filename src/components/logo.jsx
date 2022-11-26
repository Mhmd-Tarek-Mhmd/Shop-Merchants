import "@fontsource/monoton/400.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Logo() {
  return (
    <Box
      component="a"
      href="/"
      sx={{
        color: "inherit",
        display: "block",
        width: "fit-content",
        textDecoration: "none",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: 26,
          display: "flex",
          alignItems: "center",
          fontFamily: "Monoton",
          justifyContent: "space-evenly",
        }}
      >
        Shop
        <Box
          alt=""
          component="img"
          src="favicon.ico"
          aria-hidden="true"
          sx={{ width: 24, height: 24 }}
        />
      </Typography>
      <Typography sx={{ mt: "-8px", fontSize: 14 }}>
        Merchants center
      </Typography>
    </Box>
  );
}

export default Logo;
