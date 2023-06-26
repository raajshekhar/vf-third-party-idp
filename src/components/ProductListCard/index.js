import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function ProductListCard({ src, title, price, description }) {
    return (
        <Grid item sm={3} xs={6} spacing={2}>
            <Card sx={{ borderRadius: 2 }}>
                <CardContent>
                    <img src={src} width="240" height="241" />
                    <h3 style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 0, fontWeight: 500 }}>{title}</h3>
                    <h5>{description}</h5>
                    <h5><b>${price}</b></h5>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to cart</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}