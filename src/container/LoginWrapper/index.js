import React from "react";
import logo from '../../logo.svg';
import Grid from '@mui/material/Grid';
import Login from "../../components/Login";

const LoginWrapper = () => {
    return (
        <Grid container sx={{ boxShadow: "1px 0px 10px inset #ccc" }}>
            <Login />
            <Grid item xs={7}>
                <img width="100%" height="100%" style={{ objectFit: "cover", boxShadow: "1px 0px 10px #ccc" }} src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" loading="eager" />
             </Grid>
        </Grid>
    )
};

export default LoginWrapper;