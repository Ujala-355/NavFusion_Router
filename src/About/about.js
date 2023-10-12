import React from "react";
import Button from "@mui/material/Button";
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
            <section>
                <h1>About Page</h1>
                <Button onClick={handle} variant="contained" style={buttonStyle}>Go to Cantact</Button>
                <Button onClick={()=>navigate(-1)} variant="contained">Go back</Button>
            </section>
        </>
    )
}
export default About;