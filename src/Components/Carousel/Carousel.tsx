import { Box, BoxProps } from "@mui/material";
import React from "react";

export const Carousel: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box
      sx={{ display: "flex", gap: 1, overflow: "auto", ...props.sx }}
      {...props}
    >
      {props.children}
    </Box>
  );
};
