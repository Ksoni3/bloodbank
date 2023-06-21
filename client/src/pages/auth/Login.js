import {
  Card,
  Box,
  Typography,
  Grid,
  AppBar,
  Link,
  Button,
  Container,
  TextField,
} from "@mui/material";
import wallpaper from "../../assets/wallpaper.jpg";
import { useStyles } from "../../styles/loginStyles";

const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={6} sm={12}>
            <Box>
              <img src={wallpaper} alt="#wallpaper" className={classes.image} />
            </Box>
          </Grid>
          <Grid item lg={6} sm={12}>
            <Box
              className={classes.applyFlex}
              height="60vh"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="h3"> Sign In</Typography>
              <Box flexDirection="column" className={classes.applyFlex}>
                <TextField label="Username" variant="outlined" />
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                />
                <Button
                  variant="contained"
                  className={classes.buttonBackground}
                >
                  {" "}
                  Submit{" "}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
