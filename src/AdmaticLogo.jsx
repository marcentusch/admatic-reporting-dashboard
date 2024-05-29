import React from "react";
import { IconButton } from "@mui/material";

function AdmaticLogo() {
  return (
    <IconButton component="a" href="https://admatic.dk" target="_blank">
      <img
        src="https://admatic.dk/wp-content/uploads/logo-admatic.svg"
        alt="Admatic Logo"
        style={{ width: 200, height: 140 }}
      />
    </IconButton>
  );
}

export default AdmaticLogo;
