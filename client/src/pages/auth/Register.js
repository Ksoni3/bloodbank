import React from "react";
import { Box, Grid, Container } from "@mui/material";

import { useStyles } from "../../styles/loginStyles";

import Form from "../../components/shared/Form/Form";
import RegisterWallpaper from "../../assets/RegisterWallpaper.jpg";

const Register = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Grid container>
          <Grid item lg={7.5} sm={12}>
            <Box>
              <img
                src={RegisterWallpaper}
                alt="#wallpaper"
                className={classes.registerImage}
              />
            </Box>
          </Grid>
          <Grid item lg={4.5} sm={12}>
            <Container sx={{ width: "80%", padding: "1rem 0" }}>
              <Box>
                <Form
                  submitBtn={"Register"}
                  formTitle={"Register Page"}
                  formType={"register"}
                />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Register;
