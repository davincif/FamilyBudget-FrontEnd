import { createMuiTheme } from "@material-ui/core/styles";
import { CustomThemeOptions } from "./MaterialThemeExtended";

const borderRadius = 4;
const btnSize = 56;

const greenMorningPalette = {
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  primary: {
    light: "#81B622",
    main: "#59981A",
    dark: "#3D550C",
    contrastText: "#ffffff",
  },
  secondary: {
    light: "#D1E2C4",
    main: "#EBEBE8",
    dark: "#31352E",
    contrastText: "#000000",
  },
  error: {
    light: "#FF7300",
    main: "#CF5C00",
    dark: "#8D1E00",
    contrastText: "#000000",
  },
  warning: {
    light: "#FFEC59",
    main: "#FBB03B",
    dark: "#BF741D",
    contrastText: "#000000",
  },
  info: {
    light: "#2EFFEA",
    main: "#21B6A8",
    dark: "#0A3631",
    contrastText: "#000000",
  },
  success: {
    light: "#57D386",
    main: "#39B54A",
    dark: "#1B970E",
    contrastText: "#000000",
  },
};

export const initialState = createMuiTheme({
  palette: {
    type: "light",
    ...greenMorningPalette,
  },
  typography: {
    subtitle1: {
      lineHeight: 1.3,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600 + 1,
      md: 960 + 1,
      lg: 1280 + 1,
      hd: 1366 + 1,
      xl: 1920,
    },
  },
  extras: {
    stdBorderRadius: `${borderRadius}px`,
    stdBtnWidth: `${btnSize}px`,
    stdBtnHeight: `${btnSize}px`,
    borderRadius: (a?: number, b?: number, c?: number, d?: number) => {
      let tr, tl, br, bl;

      if (a === undefined) {
        tr = tl = br = bl = borderRadius;
      } else if (b === undefined) {
        tr = tl = br = bl = a * borderRadius;
      } else if (c === undefined) {
        tl = br = a * borderRadius;
        tr = bl = b * borderRadius;
      } else if (d === undefined) {
        tl = a * borderRadius;
        tr = bl = b * borderRadius;
        br = c * borderRadius;
      } else {
        tl = a * borderRadius;
        tr = b * borderRadius;
        br = c * borderRadius;
        bl = d * borderRadius;
      }

      return `${tr}px ${tl}px ${br}px ${bl}px `;
    },
    snackBars: {
      success: {
        errorSnack: {
          backgroundColor: `${greenMorningPalette.success.main} !important`,
          color: `${greenMorningPalette.success.contrastText} !important`,
          borderRadius: `${borderRadius}px !important`,
        },
        iconSnack: {
          color: `${greenMorningPalette.success.contrastText} !important`,
        },
      },
      error: {
        errorSnack: {
          backgroundColor: `${greenMorningPalette.error.main} !important`,
          color: `${greenMorningPalette.error.contrastText} !important`,
          borderRadius: `${borderRadius}px !important`,
        },
        iconSnack: {
          color: `${greenMorningPalette.error.contrastText} !important`,
        },
      },
      warning: {
        errorSnack: {
          backgroundColor: `${greenMorningPalette.warning.main} !important`,
          color: `${greenMorningPalette.warning.contrastText} !important`,
          borderRadius: `${borderRadius}px !important`,
        },
        iconSnack: {
          color: `${greenMorningPalette.warning.contrastText} !important`,
        },
      },
      info: {
        errorSnack: {
          backgroundColor: `${greenMorningPalette.info.main} !important`,
          color: `${greenMorningPalette.info.contrastText} !important`,
          borderRadius: `${borderRadius}px !important`,
        },
        iconSnack: {
          color: `${greenMorningPalette.info.contrastText} !important`,
        },
      },
    },
  },
} as CustomThemeOptions);

export const ThemeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GREEN_MORNING":
      return initialState;

    case "LIGHT":
      return initialState;

    default:
      return initialState;
  }
};
