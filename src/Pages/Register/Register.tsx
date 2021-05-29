// Third party libs
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

// material-ui
import {
  Button,
  ButtonBase,
  CssBaseline,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

// Internal imports
import { useStyles } from "./RegisterStyle";
import ErrorMsg from "../../Components/ErrorMsg/ErrorMsg";
import { capitalize, capitalizeInitials } from "../../Reducers/Locale/Tools";
import { LocaleContext } from "../../Reducers/Locale/LocaleContext";

interface RegisterFormInputs {
  user: string;
  password: string;
}

function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormInputs>();
  const classes = useStyles();

  const { locale } = useContext(LocaleContext);

  const [usernick, setUsernick] = useState("");
  const [password, setPassword] = useState("");
  const [errorToggler, setErrorToggler] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const onSubmit = (data: any) => {
    console.log("data", data);
    alert(JSON.stringify(data));
  };

  const handleToggleHidePassword = () => {
    setHidePass(!hidePass);
  };

  return (
    <div className={classes.RegisterWrapper}>
      <CssBaseline />

      <div className={classes.paper}>
        <div className={classes.logoBtn}>
          <Typography variant="h4" component="span" className={classes.logo}>
            Family Budget
          </Typography>
        </div>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            {...register("user", {
              required: "any",
            })}
            className={classes.inputBox}
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            placeholder={capitalizeInitials(locale.msgs.nick)}
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon className={classes.accountIcon} />
                </InputAdornment>
              ),
              classes: { notchedOutline: classes.noBorder },
            }}
            value={usernick}
            onChange={(e) => setUsernick(e.target.value)}
          />

          <TextField
            {...register("password", {
              required: "any",
              minLength: {
                value: 4,
                message: `${capitalizeInitials(locale.msgs.field_too_short)} 4`,
              },
            })}
            className={classes.inputBox}
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            placeholder={capitalizeInitials(locale.msgs.password)}
            type={hidePass ? "password" : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon className={classes.lockIcon} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <ButtonBase onClick={handleToggleHidePassword}>
                    {hidePass ? (
                      <VisibilityIcon className={classes.lockIcon} />
                    ) : (
                      <VisibilityOffIcon className={classes.lockIcon} />
                    )}
                  </ButtonBase>
                </InputAdornment>
              ),
              classes: { notchedOutline: classes.noBorder },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            className={classes.submit}
            onClick={() => setErrorToggler(!errorToggler)}
          >
            <Typography
              variant="body1"
              component="span"
              className={classes.submitText}
            >
              {capitalize(locale.msgs.sign_in)}
            </Typography>
          </Button>
        </form>

        <ErrorMsg
          msg={
            errors.user || errors.password
              ? capitalize(locale.msgs.wrong_Register)
              : ""
          }
          snackBar={{
            autoHideDuration: 6000,
            showOnToggle: errorToggler,
          }}
        />
      </div>
    </div>
  );
}

export default Register;
