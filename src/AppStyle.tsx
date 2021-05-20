// Third party libs
import { makeStyles } from "@material-ui/core/styles";
import { CustomTheme } from "./Reducers/Theme/MaterialThemeExtended";

export const useStyles = makeStyles((theme: CustomTheme) => ({
  backGround: {
    backgroundColor: theme.palette.secondary.dark,
    height: "100%",
  },
}));
