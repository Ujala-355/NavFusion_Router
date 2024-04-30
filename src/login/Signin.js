import React,{useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../firebase";
import {TextField,Button,Typography,Grid} from "@mui/material";

const auth=getAuth(app);

const buttonStyle = {
    margin: '20px auto',
};

const SigninPage=()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const singninUser=()=>{
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>console.log("Signin success"))
            .catch((error)=>console.log(error));
    }
    return(
        <>  
            <Grid>
                <Typography>Email</Typography>
                <TextField 
                    label='Enter your Email' 
                    fullWidth 
                    required 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Typography>Password</Typography>
                <TextField 
                    label='Enter your Password' 
                    type='password' 
                    fullWidth 
                    required
                    onChange={(e)=>setPassword(e.target.value)} 
                    value={password} 
                />
                <Button  variant="contained" style={buttonStyle} fullWidth onClick={singninUser}>Login</Button>
            </Grid>
        </>
    )
}
export default SigninPage