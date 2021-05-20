// Third party libs
import { makeStyles } from "@material-ui/core/styles";
import { CustomTheme } from "../../Reducers/Theme/MaterialThemeExtended";

export const useStyles = makeStyles((theme: CustomTheme) => ({
  errorBox: {
    height: theme.spacing(3),
    margin: theme.spacing(0.5, 0, 0, 0.5),
  },
  errorMsg: {
    fontWeight: theme.typography.fontWeightBold,
  },
  errorSnack: { ...theme.extras.snackBars.error.errorSnack },
  iconSnack: { ...theme.extras.snackBars.error.iconSnack },
}));
