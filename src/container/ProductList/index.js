import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ListCard from "../../components/ProductListCard"
import imgs from "../../images/laptop.png";

const list = [
    {
        src: imgs || require("../../images/laptop.png"),
        title: "iPad Pro",
        description: "Supercharged by M2",
        price: "44990.00"
    },
    {
        src: require("../../images/pen.png"),
        title: "Apple Pencil",
        description: "2nd generation",
        price: "10000.00"
    },
    {
        src: require("../../images/ipad.png"),
        title: "New iPad",
        description: "Final Cut Pro and Logic Pro for iPad",
        price: "10000.00"
    },
    {
        src: require("../../images/earpods.jpg"),
        title: "AirPods Pro (2nd generation)",
        description: "2nd Generation",
        price: "26900.00"
    },
    {
        src: require("../../images/mouse.jpg"),
        title: "IPad",
        description: "2nd Generation",
        price: "1000"
    },
    {
        src: require("../../images/pen.png"),
        title: "IPad",
        description: "2nd Generation",
        price: "1000"
    },
    {
        src: require("../../images/speaker.png"),
        title: "HomePod mini - Blue",
        description: "Surprising sound for its size",
        price: "10090.00"
    },
    {
        src: require("../../images/speaker2.jpg"),
        title: "HomePod - Midnight",
        description: "Surprising sound for its size",
        price: "32900.00"
    },
    {
        src: require("../../images/mouse.jpg"),
        title: "Magic Mouse",
        description: "Black Multi-Touch Surface",
        price: "9500.00"
    }
]

const ProductList = () => {
    return (
        <Grid container sx={{ padding: "30px", background: "#eef2f6" }}>
            <TextField sx={{ marginBottom: 3 }} label="Search" variant="outlined" />
            <Grid container container spacing={5}>

                {list.map(product => <ListCard {...product} />)}

            </Grid>
        </Grid>
    )
};

export default ProductList;