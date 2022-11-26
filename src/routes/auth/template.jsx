import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";

function Template({ prefix, handleSubmit, formInputs }) {
  return (
    <>
      <Typography sx={{ mb: 4 }} component="h1" variant="h5">
        {prefix === "up" ? "Create" : "Sign in to"} your account
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {formInputs}

        {prefix === "up" && (
          <FormHelperText sx={{ mt: 1 }}>
            By clicking sign up you agree our{" "}
            <Link component="button" sx={{ fontSize: "inherit" }}>
              Terms of Use
            </Link>{" "}
            and our{" "}
            <Link component="button" sx={{ fontSize: "inherit" }}>
              {" "}
              Privacy Policy
            </Link>
            .
          </FormHelperText>
        )}
        <Button
          fullWidth
          size="large"
          type="submit"
          sx={{ mt: 3 }}
          variant="contained"
        >
          Sign {prefix}
        </Button>
      </Box>
    </>
  );
}

export default Template;
