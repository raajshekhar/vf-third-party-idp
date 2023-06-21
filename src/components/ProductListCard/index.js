import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function ProductListCard({ src, title, price }) {
    return (
        <Grid item sm={3} xs={6} spacing={2}>
            <Card>
                <CardContent>
                    <img src={src} width="240" height="241" />
                    <h3 style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 0, fontWeight: 500 }}>{title} <span>${price}</span></h3>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to cart</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}