import React from "react";
import Login from "./Login";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import "./customise-style/bg.css";
import "./customise-style/spacing.css";
import Paper from "@material-ui/core/Paper";

export default function Landing() {
  return (
    <body className="landing-bg">
      <Container className="all-padding-1" maxWidth="xs">
        <Paper className="all-padding-1">
          <Box component="span" m={2}>
            LOGO
          </Box>
          <Login />{" "}
        </Paper>
      </Container>
    </body>
  );
}
