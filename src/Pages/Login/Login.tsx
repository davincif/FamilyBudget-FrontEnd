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

// Internal imports
import { useStyles } from "./LoginStyle";
import ErrorMsg from "../../Components/ErrorMsg/ErrorMsg";
import { capitalize, capitalizeInitials } from "../../Reducers/Locale/Tools";
import { LocaleContext } from "../../Reducers/Locale/LocaleContext";

interface LoginFormInputs {
  user: string;
  password: string;
}

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormInputs>();
  const classes = useStyles();

  const { locale } = useContext(LocaleContext);

  const [usernick, setUsernick] = useState("");
  const [password, setPassword] = useState("");
  const [errorToggler, setErrorToggler] = useState(false);

  const onSubmit = (data: any) => {
    console.log("data", data);
    alert(JSON.stringify(data));
  };

  return (
    <div className={classes.loginWrapper}>
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
            {...register("user", { required: "User é requerido" })}
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
              required: "Password é requerido",
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
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon className={classes.lockIcon} />
                </InputAdornment>
              ),
              classes: { notchedOutline: classes.noBorder },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={classes.loginBaseBtns}>
            <ButtonBase className={classes.forgetBtn}>
              {capitalize(locale.msgs.forgot_password_q)}
            </ButtonBase>

            <ButtonBase className={classes.forgetBtn}>
              {capitalize(locale.msgs.sign_up)}
            </ButtonBase>
          </div>

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
              ? "Usuário e/ou senha incorretos"
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

export default Login;
