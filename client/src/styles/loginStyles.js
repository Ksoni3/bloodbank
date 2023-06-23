import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  registerImage: {
    height: "110vh",
    width: "100%",
  },
  loginImage: {
    height: "100vh",
    width: "100%",
  },

  applyFlex: {
    display: "flex",
    gap: theme.spacing(2),
  },

  applyFlexCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },

  buttonPadding: {
    padding: "0.6rem",
  },

  styleForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(2),
  },
}));
