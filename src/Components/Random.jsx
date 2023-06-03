import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Random = () => {
  const { presentText } = useSelector((store) => store.AppReducer);
  return (
    <Box
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        border: "1px solid black",
        backgroundColor:"#2c34",
        width: "20%",
        margin: "auto",
        paddingBottom: "20px",
        marginTop: "4%",
        marginBottom: "20px",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ marginTop: "20px", fontSize: "25px" }}>
        {presentText}
      </Typography>
    </Box>
  );
};

export default Random;
