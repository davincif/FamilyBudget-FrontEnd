import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    hd: true;
    xl: true;
  }
}

interface extras {
  stdBorderRadius: string;
  stdBtnWidth: string;
  stdBtnHeight: string;
  borderRadius: (a?: number, b?: number, c?: number, d?: number) => string;
  snackBars: {
    success: {
      errorSnack: {
        backgroundColor: string;
        color: string;
        borderRadius: string;
      };
      iconSnack: {
        color: string;
      };
    };
    error: {
      errorSnack: {
        backgroundColor: string;
        color: string;
        borderRadius: string;
      };
      iconSnack: {
        color: string;
      };
    };
    warning: {
      errorSnack: {
        backgroundColor: string;
        color: string;
        borderRadius: string;
      };
      iconSnack: {
        color: string;
      };
    };
    info: {
      errorSnack: {
        backgroundColor: string;
        color: string;
        borderRadius: string;
      };
      iconSnack: {
        color: string;
      };
    };
  };
}

interface extrasOptions {
  stdBorderRadius?: string;
  stdBtnWidth?: string;
  stdBtnHeight?: string;
  borderRadius?: (a: number, b?: number, c?: number, d?: number) => string;
  snackBars?: {
    success?: {
      errorSnack?: {
        backgroundColor?: string;
        color?: string;
        borderRadius?: string;
      };
      iconSnack?: {
        color?: string;
      };
    };
    error?: {
      errorSnack?: {
        backgroundColor?: string;
        color?: string;
        borderRadius?: string;
      };
      iconSnack?: {
        color?: string;
      };
    };
    warning?: {
      errorSnack?: {
        backgroundColor?: string;
        color?: string;
        borderRadius?: string;
      };
      iconSnack?: {
        color?: string;
      };
    };
    info?: {
      errorSnack?: {
        backgroundColor?: string;
        color?: string;
        borderRadius?: string;
      };
      iconSnack?: {
        color?: string;
      };
    };
  };
}

export interface CustomTheme extends Theme {
  extras: extras;
}

export interface CustomThemeOptions extends ThemeOptions {
  extras?: extrasOptions;
}
