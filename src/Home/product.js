import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log("error", error));
    }, []);
    return (
        <>
            <div>
                <h1>Products</h1>
                <Grid container spacing={2}>
                    {products.map((p) => (
                        <Grid item xs={12} sm={6} md={4} key={p.id}>
                            <Card style={{ height: "100%" }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={p.image}
                                    alt={p.title}
                                    style={{ objectFit: "contain" }}
                                />
                                <CardContent style={{ height: "150px" }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {p.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price: ${p.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </div>
        </>
    );
};

export default Products;
