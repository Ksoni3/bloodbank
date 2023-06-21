import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    height: "100vh",
    width: "100%",
  },

  applyFlex: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(3),
  },

  buttonBackground: {
    padding: "1rem",
    color: "white",
  },
}));
