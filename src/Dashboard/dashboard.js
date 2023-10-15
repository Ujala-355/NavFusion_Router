import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";
const Dashboard=()=>{
    const navigate=useNavigate()
    const handle=()=>{
        navigate("/")
    }
    const buttonStyle={
        marginRight:"10px",
    }
    return(
        <>
            <Grid container justifyContent="center" marginTop="20px">
                <Grid item>
                    <Button onClick={handle} variant="contained" style={buttonStyle}>
                        Go to the Home page
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={() => navigate(-1)} variant="contained">
                        Go Back
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
export default Dashboard;