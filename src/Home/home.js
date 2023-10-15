import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";
import Jewelery from "./jewelery"
const Home=()=>{
    const navigate=useNavigate()
    const handle=()=>{
        navigate("/about")
    }
    const buttonStyle={
        marginRight:"10px",
    }
    return(
        <>  
            <Jewelery/>
            <Grid container justifyContent="center" marginTop="20px">
                <Grid item>
                    <Button onClick={handle} variant="contained" style={buttonStyle}>
                        Go to the About page
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
export default Home;