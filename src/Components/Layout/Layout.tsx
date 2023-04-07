import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { ImageList, SxProps } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

type LayoutSubComponents = {
  Navbar: typeof Navbar;
  Text: typeof TextBlock;
  Image: typeof FocusImage;
  PreviewImages: typeof PreviewImages;
};

const layoutContainerCSS: SxProps = {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateAreas: {
    xs: `
    "header header header header header header"
    "image image image image image image"
    "previewImages previewImages previewImages previewImages previewImages previewImages"
    "text text text text text text"
  `,
    md: `
    "header header header header header header"
    "text text text image image image"
    "previewImages previewImages previewImages previewImages previewImages previewImages"
  `,
  },
};

export const Layout: React.FC<Props> & LayoutSubComponents = (props: Props) => {
  return <Box sx={layoutContainerCSS}>{props.children}</Box>;
};

const Navbar: React.FC<BoxProps> = ({ ...props }) => {
  return <Box sx={{ gridArea: "header", ...props.sx }}> {props.children} </Box>;
};

Layout.Navbar = Navbar;

const TextBlock: React.FC<BoxProps> = ({ ...props }) => {
  return <Box sx={{ gridArea: "text", ...props.sx }}></Box>;
};

Layout.Text = TextBlock;

const FocusImage: React.FC<BoxProps> = ({ ...props }) => {
  return <Box sx={{ gridArea: "image", ...props.sx }}></Box>;
};

Layout.Image = FocusImage;

const PreviewImages: React.FC<BoxProps> = ({ ...props }) => {
  return <Box sx={{ gridArea: "previewImages", ...props.sx }}></Box>;
};

Layout.PreviewImages = PreviewImages;
