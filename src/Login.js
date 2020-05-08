import React from "react";
import "./styles.css";
import "./style/custom.css";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function Login() {
  return (
    <form noValidate autoComplete="off">
      <div className="all-margin-1">
        <TextField
          id="outlined-full-width"
          label="Mobile Number"
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="all-margin-1">
        <TextField
          id="outlined-full-width"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="all-margin-1">
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remeber my password"
        />
      </div>
      <div className="all-margin-1">
        <Button variant="contained" color="primary" className="margin-r">
          Login
        </Button>
        <Button variant="outlined" color="primary" className="margin-r">
          new account
        </Button>
      </div>
      <div className="all-margin-1">
        <Link component="button" variant="body2">
          Forget your password?
        </Link>
      </div>
    </form>
  );
}
