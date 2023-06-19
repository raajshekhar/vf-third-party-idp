import React from "react";
import logo from '../../logo.svg';
import Grid from '@mui/material/Grid';
import Login from "../../components/Login";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const LoginWrapper = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Grid container  justifyContent="center"
        alignItems="center">
            <Login />
            {isSmallScreen ? null : (
                <Grid item lg={7}>
                    <img width="100%" style={{ objectFit: "cover", height:"100vh", boxShadow: "1px 0px 10px #ccc" }} src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" loading="eager" />
                </Grid>
            )}
        </Grid>
    )
};

export default LoginWrapper;