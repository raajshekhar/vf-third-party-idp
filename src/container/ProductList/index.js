import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ListCard from "../../components/ProductListCard"
import imgs from "../../images/laptop.png";

const list = [
    {
        src: imgs || require("../../images/laptop.png"),
        title: "IPad",
        price: "1000"
    },
    {
        src: require("../../images/pen.png"),
        title: "IPad",
        price: "1000"
    },
    {
        src: require("../../images/ipad.png"),
        title: "IPad",
        price: "1000"
    },
    {
        src: require("../../images/earpods.jpg"),
        title: "IPad",
        price: "1000"
    },
    {
        src: require("../../images/mouse.jpg"),
        title: "IPad",
        price: "1000"
    },
    {
        src: require("../../images/pen.png"),
        title: "IPad",
        price: "1000"
    },
    {
        src: require("../../images/speaker.png"),
        title: "IPad",
        price: "1000"
    },
    {
        src: require("../../images/speaker2.jpg"),
        title: "IPad",
        price: "1000"
    },
    {
        src: require("../../images/mouse.jpg"),
        title: "IPad",
        price: "1000"
    }
]

const ProductList = () => {
    return (
        <Grid container sx={{ padding: "30px" }}>
            <TextField sx={{ marginBottom: 3 }} label="Search" variant="outlined" />
            <Grid container container spacing={5}>

                {list.map(product => <ListCard {...product} />)}

            </Grid>
        </Grid>
    )
};

export default ProductList;