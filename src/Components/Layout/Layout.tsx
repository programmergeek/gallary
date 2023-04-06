import React from "react";
import Box from "@mui/material/Box";
import { ImageList } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

type LayoutSubComponents = {
  Navbar: typeof Navbar;
  Text: typeof TextBlock;
  Image: typeof FocusImage;
  PreviewImages: typeof PreviewImages;
};

export const Layout: React.FC<Props> & LayoutSubComponents = (props: Props) => {
  return <Box>{props.children}</Box>;
};

const Navbar = (props: Props) => {
  return <div> {props.children} </div>;
};

Layout.Navbar = Navbar;

const TextBlock = (props: Props) => {
  return <div></div>;
};

Layout.Text = TextBlock;

const FocusImage = (props: Props) => {
  return <div></div>;
};

Layout.Image = FocusImage;

const PreviewImages = (props: Props) => {
  return <div></div>;
};

Layout.PreviewImages = PreviewImages;
