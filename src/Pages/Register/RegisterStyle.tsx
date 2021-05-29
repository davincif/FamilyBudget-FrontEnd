// Third party libs
import { makeStyles } from "@material-ui/core/styles";
import { CustomTheme } from "../../Reducers/Theme/MaterialThemeExtended";

export const useStyles = makeStyles((theme: CustomTheme) => ({
  RegisterWrapper: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
  },
  logoBtn: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: 0,
  },
  submit: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1, 5),
    width: "100%",
    height: theme.extras.stdBtnHeight,
    backgroundColor: theme.palette.primary.main,
    textTransform: "none",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.contrastText}`,
    },
  },
  submitText: {
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightBold,
  },
  backBtn: {
    margin: 0,
    padding: "auto",
    display: "inline",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.extras.stdBorderRadius,
    width: theme.extras.stdBtnWidth,
    height: theme.extras.stdBtnHeight,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.contrastText}`,
    },
  },
  logo: {
    color: theme.palette.secondary.light,
    // opacity: 0.7,
    display: "inline",
    margin: theme.spacing("auto", "auto"),
    padding: theme.spacing("auto", "auto"),
    alignSelf: "center",
    textAlign: "center",
    fontWeight: theme.typography.fontWeightBold,
  },
  accountIcon: {
    color: theme.palette.primary.dark,
  },
  lockIcon: {
    color: theme.palette.primary.dark,
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
  },
  inputBox: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: theme.extras.stdBorderRadius,
    "& input": {
      color: theme.palette.secondary.contrastText,
    },
    margin: theme.spacing(2, 0, 0, 0),
  },
  noBorder: {
    border: "none",
  },
}));
