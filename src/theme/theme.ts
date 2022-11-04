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
      main: "#6366F1",
      dark: "",
    },
    secondary: {
      light: "",
      main: "",
      dark: "",
    },
    text: {
      light: "#6B7280",
      main: "#111827",
      dark: "#111827",
    },
    border: {
      light: '#E5E7EB',
      main: "",
      dark: "",
    },
  },
  spacing: (x = 1) => 8 * x,
  boxShadow:[
    '0px 4px 6px -2px #0000000D, 0px 10px 15px -3px #0000001A',
    '0px 1px 2px 0px #0000000F, 0px 1px 3px 0px #0000001A'
  ]
};

export default theme;
