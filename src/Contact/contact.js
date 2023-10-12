import React from "react";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
const Contact=()=>{
    const navigate=useNavigate()
    const handle=()=>{
        navigate("/dashboard")
    }
    const buttonStyle={
        marginRight:"10px",
    }
    return(
        <>
            <section>
                <h1>Contact Page</h1>
                <Button onClick={handle} variant="contained" style={buttonStyle} >Go to the Dashboard page</Button>
                <Button onClick={()=>navigate(-1)} variant="contained">Go Back</Button>
            </section>
        </>
    )
}
export default Contact