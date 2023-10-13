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
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={6}>
                <Paper elevation={3} style={{ padding: "20px" }}>
                    <TextField
                        id="filled-basic"
                        label="Enter your Name"
                        variant="filled"
                        value={name}
                        color="secondary"
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        id="filled-basic"
                        label="Enter your Last Name"
                        variant="filled"
                        value={lastName}
                        color="secondary"
                        onChange={(e) => setLastName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        id="filled-basic"
                        label="Enter your Age"
                        variant="filled"
                        value={age}
                        color="secondary"
                        onChange={(e) => setAge(e.target.value)}
                        fullWidth
                    />
                    <Button variant="contained" onClick={handleData} fullWidth>
                        Add Data
                    </Button>
                    <table style={{ marginTop: "20px" }}>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.age}</td>
                                </tr>
                            ))}
                    </table>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Data;
