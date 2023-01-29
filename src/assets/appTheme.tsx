import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface Palette {
    gray: Palette["primary"];
    sidePanel: Palette["primary"];
  }
  interface PaletteOptions {
    gray: PaletteOptions["primary"];
    sidePanel: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

export const appTheme = createTheme({
  palette: {
    // primary: {
    //   // light: will be calculated from palette.primary.main,
    //   main: '#ff4400',
    //   // dark: will be calculated from palette.primary.main,
    //   // contrastText: will be calculated to contrast with palette.primary.main
    // },
    // secondary: {
    //   light: '#0066ff',
    //   main: '#0044ff',
    //   // dark: will be calculated from palette.secondary.main,
    //   contrastText: '#ffcc00',
    // },
    gray: {
      light: "#dcdde6",
      main: "#b2b7c1",
      dark: "#8d8aab",
    },
    sidePanel: {
      main: "#1e095c",
      light: "#a48cd2",
    },
  },
});
