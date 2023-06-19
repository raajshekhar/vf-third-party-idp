import React from "react";
import logo from '../../logo.svg';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from "@mui/system/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "./style.css";
import { styled } from '@mui/material/styles';


const BootstrapButton = styled(Button)({
    minWidth: 180
});

const Login = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Grid lg={5} md={7} xs={12} sx={{ paddingInline: isSmallScreen ? "5rem" : "6rem" }}>
        <Grid item>
        <img src={logo} className="App-logo" alt="logo" style={{ width: "40px", height: "50px", marginTop: "3rem" }} />
            <h2 style={{ marginTop: 0 }}>Sign in to your account</h2>
            <p>Not a member? <a href="#">Start a 14 day free trial</a></p>
            </Grid>
            <Grid sm={12} xs={12}>
                <label>Email address</label>
                <OutlinedInput
                    fullWidth
                    size="small"
                    sx={{ marginTop: 1 }}
                    id="login_emailaddress"
                />
            </Grid>
            <Grid item sm={12} xs={12}>
                <label>Password</label>
                <OutlinedInput
                    fullWidth
                    size="small"
                    sx={{ marginTop: 1 }}
                    id="login_password"
                />
            </Grid>
            <Grid container justifyContent="space-between"
                alignItems="center"
            >
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Button variant="text" sx={{ paddingRight: 0 }}>Forgot password?</Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" fullWidth sx={{ marginTop: 3 }}>Sign IN</Button>
            </Grid>

            <Grid item xs={12} id="continue-idp" sx={{ marginTop: "2.5rem", marginBottom: "1rem", textAlign: "center" }}>
                <div id="continue-idp_border" />
                <div className="continue-idp_text">
                    Or continue with
                </div>
            </Grid>

            <Grid item xs={12} spacing={3}  justifyContent={isSmallScreen ? "center" : "space-between"}
        alignItems="center" sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginTop: 4 }}>
                <BootstrapButton variant="contained" color="error" size="large">Google</BootstrapButton>
                <BootstrapButton variant="contained" color="success" size="large">Twitter</BootstrapButton>
                <BootstrapButton variant="contained" size="large">EE</BootstrapButton>
            </Grid>

        </Grid>
    )
};

export default Login;