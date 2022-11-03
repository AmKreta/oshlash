import "styled-components";

declare module "styled-components" {
  interface COLOR_SET {
    light: string;
    main: string;
    dark: string;
  }
  export interface THEME {
    palette: {
      paper: COLOR_SET;
      text: COLOR_SET;
      primary: COLOR_SET;
      secondary: COLOR_SET;
      border: COLOR_SET;
    };
    spacing: (x: number) => number;
  }
}
