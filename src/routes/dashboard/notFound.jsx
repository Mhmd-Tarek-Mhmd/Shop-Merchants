import { useDocumentTitle } from "../../hooks";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function NotFound() {
  useDocumentTitle("Not Found");

  return (
    <Box
      sx={{
        height: "100%",
        minHeight: 560,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            align="center"
            color="textPrimary"
            component="h1"
            variant="h4"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>

          <Box
            component="img"
            alt="Under development"
            src="not-found.svg"
            sx={{
              display: "inline-block",
              maxWidth: "100%",
              width: 560,
              mt: 6.25,
              mb: 3,
            }}
          />

          <Button
            href="/"
            component="a"
            sx={{ mt: 3 }}
            variant="contained"
            startIcon={<ArrowBackIcon fontSize="small" />}
          >
            Go back to dashboard
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default NotFound;
