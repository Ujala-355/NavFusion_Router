import {useEffect,useState} from "react";
import {getAuth,onAuthStateChanged,signOut} from "firebase/auth";
import {app} from "../firebase";
import SignupPage from "./Signup";
import SigninPage from "./Signin";
import {Button,Typography,Avatar,Paper,Grid} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const auth=getAuth(app);
function Login() {
    const [user,setUser]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log("login",user);
                setUser(user);
            }
            else{
                console.log('You are logged out')
                setUser(null);
            }
        })
    },[]);
    if (user===null){
        return(
            <>
                <Grid container style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                    <Paper elevation={10} style={{padding:20,width:300}}>
                        <Grid align='center'>
                            <Avatar style={{ backgroundColor: '#1bbd7e' }}><LockOutlinedIcon /></Avatar>
                            <Typography>SignUp</Typography>
                        </Grid>
                        <SignupPage/>
                        <SigninPage/>
                    </Paper>
                </Grid>
            </>
        )
    }
  return (
      <Grid container style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h3">you are already login</Typography>
          <Typography>{useEffect.email}</Typography>
          <Button onClick={()=>signOut(auth)} variant="contained">Logout</Button>
      </Grid>
  );
}
export default Login;
