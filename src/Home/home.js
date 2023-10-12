import React from "react";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Data from "./information"
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
            <Data/>
            <section>
                <Button onClick={handle} variant="contained" style={buttonStyle} >Go to the About page</Button>
                <Button onClick={()=>navigate(-1)} variant="contained">Go Back</Button>
            </section>
        </>
    )
}
export default Home;