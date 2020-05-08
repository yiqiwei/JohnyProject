import React from "react";
import "./styles.css";
import "./customise-style/spacing.css";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export default function Login() {
  return (
    <form noValidate autoComplete="off">
      <Box className="all-margin-1">
        <TextField
          id="outlined-full-width"
          label="Mobile Number"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box className="all-margin-1">
        <TextField
          id="outlined-full-width"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box className="all-margin-1">
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remeber my password"
        />
      </Box>

      <Box className="all-margin-1">
        <Button
          className="margin-b"
          variant="contained"
          fullWidth="ture"
          color="primary"
          size="large"
        >
          Login
        </Button>
      </Box>

      <Box className="all-margin-1">
        <Button
          variant="outlined"
          fullWidth="ture"
          color="primary"
          size="large"
        >
          new account
        </Button>
      </Box>

      <Box className="all-margin-1">
        <Link component="button" variant="body2">
          Forget your password?
        </Link>
      </Box>
    </form>
  );
}
