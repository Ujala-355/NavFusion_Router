import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Data = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");

    const handleData = () => {
        if (name && lastName && age) {
            setData([...data, { name, lastName, age }]);
            setName("");
            setLastName("");
            setAge("");
        }
    };
    return (
        <>
            <Paper elevation={3} style={{ padding: "20px" }}>
            <Grid container spacing={3}>
                <Grid item lg={3} sx={6} xs={12}>
                <TextField
                    fullWidth
                    id="filled-basic"
                    label="Enter your Name"
                    variant="filled"
                    value={name}
                    color="secondary"
                    onChange={(e) => setName(e.target.value)}
                />
                </Grid>
                <Grid item lg={3} sx={6} xs={12}>
                    <TextField
                        fullWidth
                        id="filled-basic"
                        label="Enter your Last Name"
                        variant="filled"
                        value={lastName}
                        color="secondary"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
                <Grid item lg={3} sx={6} xs={12}>
                    <TextField
                        fullWidth
                        id="filled-basic"
                        label="Enter your Age"
                        variant="filled"
                        value={age}
                        color="secondary"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleData}>Add Data</Button>
                </Grid>
            </Grid>
            <table style={{ marginTop: "20px" }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </Paper>
        </>
    );
};
export default Data;
