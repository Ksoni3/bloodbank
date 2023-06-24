import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

const LoadingSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.spinnerContainer}>
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
