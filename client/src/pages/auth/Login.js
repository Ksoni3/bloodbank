import { Box, Grid, Container } from "@mui/material";
import wallpaper from "../../assets/wallpaper.jpg";
import { useStyles } from "../../styles/loginStyles";
import Form from "../../components/shared/Form/Form";

const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Grid container>
          <Grid item lg={7.5} sm={12}>
            <Box>
              <img
                src={wallpaper}
                alt="#wallpaper"
                className={classes.loginImage}
              />
            </Box>
          </Grid>
          <Grid item lg={4.5} sm={12} className={classes.applyFlexCol}>
            <Container sx={{ width: "80%", height: "50v" }}>
              <Box>
                <Form
                  submitBtn={"Submit"}
                  formTitle={"Login Page"}
                  formType={"login"}
                />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
