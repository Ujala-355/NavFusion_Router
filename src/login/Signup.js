import React,{useState} from "react";
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {app} from "../firebase";
import {TextField,Button,Typography,Grid} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();


const buttonStyle = {
    margin: '20px auto',
};

const SignupPage=()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const createUser=()=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Success");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    }
    const signupWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
    }
    const signupUser=()=>{
        createUserWithEmailAndPassword(
          auth,
          "ujala@gmail.com",
          "ujala@123"
        ).then((value)=>console.log(value));
    }
    return(
        <>
            <Grid>
                <Typography>Email</Typography>
                <TextField
                    onChange={(e)=>setEmail(e.target.value)} 
                    fullWidth
                    value={email} 
                    label="Enter your email here"
                    required 
                />

                <Typography>Password</Typography>
                <TextField
                    onChange={(e)=>setPassword(e.target.value)} 
                    value={password} 
                    fullWidth
                    label="Enter your password here" 
                    required
                />
                <Button onClick={createUser}
                    variant="contained"
                    fullWidth
                    style={buttonStyle}
                >SignUp</Button>
                <Button onClick={signupWithGoogle}
                    variant="contained"
                    startIcon={<GoogleIcon />}
                    fullWidth
                    style={buttonStyle}
                >Signin with Google</Button>
                
            </Grid>
        </>
    )
}
export default SignupPage;

