import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
// import { Grid, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';


const Jewelery=()=>{
    const[products,setProducts]=useState([]);
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then((response)=>response.json())
            .then((data)=>setProducts(data))
            .catch((error)=>console.log("error", error));
    },[]);

    const handleDelete=(id)=>{
        const updatedProducts=products.filter((product)=>product.id!==id);
        setProducts(updatedProducts);
    };

    const handleAdd=()=>{
        if (name && price) {
            const newProduct={
                title:name,
                price:parseFloat(price),
                id:Date.now(),
        };
        setProducts([...products, newProduct]);
        setName("");
        setPrice("");
        }
    };

    return (
        <>
            <div>
                <h1>Jewelry Products</h1>
                <ol>
                    {products.map((p) => (
                        <li key={p.id}>
                        <Typography>{p.title}</Typography>
                        <Typography>Price: ${p.price}</Typography>
                        <img src={p.image} alt={p.title} width="150px" height="150px" />
                        <DeleteIcon onClick={()=>handleDelete(p.id)} />
                    </li>
                ))}
                </ol>
            </div>
            <div>
                <Typography>Add New Product</Typography>
                <TextField
                    label="Product Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <TextField
                    label="Product Price"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
                <Button variant="contained" onClick={handleAdd} style={{marginLeft:'10px',marginTop:"10px"}}>Add Data</Button>
             </div>
        </>
    );
};
export default Jewelery;
