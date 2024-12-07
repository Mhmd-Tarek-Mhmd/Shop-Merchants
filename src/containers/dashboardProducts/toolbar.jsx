import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

function Toolbar({ setProducts, stateProducts, handleDialogOpen }) {
  const handleChange = (e) => {
    setProducts(
      stateProducts.filter((prod) =>
        prod.title.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          columnGap: "24px",
          alignItems: "center",
        }}
      >
        <TextField
          size="small"
          sx={{ flex: 1 }}
          variant="outlined"
          onChange={handleChange}
          placeholder="Search product"
          aria-label="Search for a product"
          disabled={!Boolean(stateProducts.length)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ opacity: !stateProducts.length && 0.3 }} />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" onClick={() => handleDialogOpen()}>
          Add product
        </Button>
      </CardContent>
    </Card>
  );
}

export default Toolbar;
