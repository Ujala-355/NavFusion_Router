import React from "react";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
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
            <section>
                <h1>Home Page</h1>
                <Button onClick={handle} variant="contained" style={buttonStyle} >Go to the About page</Button>
                <Button onClick={()=>navigate(-1)} variant="contained">Go Back</Button>
            </section>
        </>
    )
}
export default Home;