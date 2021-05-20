// Third party libs
import React, { useEffect, useState } from "react";

// material-ui
import { Snackbar, Typography } from "@material-ui/core";

// Internal imports
import { useStyles } from "./ErrorMsgStyle";
import { Alert } from "@material-ui/lab";

interface MsgProps {
  msg?: string;
  keepSpace?: boolean;
}

interface SnackMsgProps extends MsgProps {
  snackBar: SnackBarProps;
}

type SnackBarProps = {
  autoHideDuration?: number;
  handleClose?: (event?: React.SyntheticEvent, reason?: string) => void;
  showOnToggle?: boolean;
  closeOnClickAway?: boolean;
};

type ErrorMsgProps = {
  className?: string;
  msg?: string;
  keepSpace?: boolean;
  snackBar?: SnackBarProps;
};

function TextMsg({ msg, keepSpace }: MsgProps) {
  const classes = useStyles();

  if (msg) {
    return (
      <Typography
        variant="caption"
        color="error"
        component="div"
        className={`${classes.errorMsg} ${classes.errorBox}`}
      >
        {msg}
      </Typography>
    );
  } else {
    return <div className={`${keepSpace ? classes.errorBox : ""}`}></div>;
  }
}

function SnackMsg({
  msg,
  snackBar: { autoHideDuration, handleClose, showOnToggle, closeOnClickAway },
}: SnackMsgProps) {
  const classes = useStyles();

  const [openSnack, setOpenSnack] = useState(false);

  useEffect(() => {
    if (msg) {
      setOpenSnack(true);
    }
  }, [msg]);

  useEffect(() => {
    if (msg) {
      setOpenSnack(true);
    }

    // eslint-disable-next-line
  }, [showOnToggle]);

  const _handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (!closeOnClickAway && reason === "clickaway") {
      return;
    }

    if (handleClose) {
      handleClose(event, reason);
    }

    msg = "";
    setOpenSnack(false);
  };

  if (msg) {
    return (
      <Snackbar
        open={openSnack}
        autoHideDuration={autoHideDuration}
        onClose={_handleClose}
      >
        <Alert
          onClose={_handleClose}
          severity="error"
          classes={{
            root: classes.errorSnack,
            icon: classes.iconSnack,
          }}
        >
          {msg}
        </Alert>
      </Snackbar>
    );
  } else {
    return null;
  }
}

function ErrorMsg({ className, msg, keepSpace, snackBar }: ErrorMsgProps) {
  // const classes = useStyles();

  return (
    <div className={`${className} `}>
      {snackBar ? (
        <SnackMsg msg={msg} keepSpace={keepSpace} snackBar={snackBar} />
      ) : (
        <TextMsg msg={msg} keepSpace={keepSpace} />
      )}
    </div>
  );
}

export default ErrorMsg;
