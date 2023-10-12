import React from "react";
import Button from "@mui/material/Button";
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
            <section>
                <h1>Dashboard Page</h1>
                <Button onClick={handle} variant="contained" style={buttonStyle} >Go to the Home page</Button>
                <Button onClick={()=>navigate(-1)} variant="contained">Go Back</Button>
            </section>
        </>
    )
}
export default Dashboard;