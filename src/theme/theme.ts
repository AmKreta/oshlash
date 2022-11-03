import { THEME } from "styled-components";

const theme: THEME = {
  palette: {
    paper: {
      light: "#FBFBFB",
      main: "#F1F1F1",
      dark: "#E7E7E7",
    },
    primary: {
      light: "",
      main: "",
      dark: "",
    },
    secondary: {
      light: "",
      main: "",
      dark: "",
    },
    text: {
      light: "#D3D3D3",
      main: "#212121",
      dark: "#121212",
    },
    border: {
      light: "",
      main: "",
      dark: "",
    },
  },
  spacing: (x = 1) => 8 * x,
};

export default theme;
