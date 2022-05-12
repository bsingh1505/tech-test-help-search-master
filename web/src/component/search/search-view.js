import { useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

export const SearchView = ({ setSearchValue, fetchData, searchValue }) => {
  const handleChange = useCallback(
    ({ target: { value } }) => {
      setSearchValue(value);
    },
    [setSearchValue]
  );
  const isButtonDisabled = !(searchValue?.length > 2);

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" p={1} m={1}>
      <Box p={1}>
        <TextField
          value={searchValue}
          onChange={handleChange}
          variant="outlined"
          label="Enter Search Word"
          helperText={"Please enter key word like sky or broadband ..."}
          fullWidth
          required
        />
      </Box>
      <Box p={2}>
        <Button variant="contained" color="primary" disabled={isButtonDisabled} onClick={fetchData}>
          Search
        </Button>
      </Box>
    </Box>
  );
};
