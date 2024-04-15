import React,{useState,useEffect} from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from "@mui/material";
const MyTable=()=>{
    const [productdata,setProductData]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then((response)=>response.json())
            .then((data)=>setProductData(data))
            .catch((error)=>console.log(error));
    },[])
    return(
        <>
            <div style={{ display: "flex", justifyContent: "center", margin: "50px", padding: "20px" }}>
                <TableContainer component={Paper} style={{ maxWidth: "800px", padding: "20px" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {productdata.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.price}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
export default MyTable;