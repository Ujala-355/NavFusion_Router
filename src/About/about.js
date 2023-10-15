import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";
const About=()=>{
    const navigate=useNavigate();
    const handle=()=>{
        navigate("/contact")
    }
    const buttonStyle={
        marginRight:"10px",
    }
    return(
        <>
            <Grid container justifyContent="center" marginTop="20px">
                <Grid item>
                    <Button onClick={handle} variant="contained" style={buttonStyle}>
                        Go to the Cantact page
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
export default About;