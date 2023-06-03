import { Box, Typography } from "@mui/material";
import React from "react";

function Top() {
  return (
    <Box sx={{ paddingTop: "10px", borderRadius: 1, height: "40px" }}>
      <Typography
        variant="h3"
        sx={{ color: "white", fontWeight: "600", letterSpacing: "7px" }}
      >
        Touch Typing
      </Typography>
    </Box>
  );
}

export default Top;
