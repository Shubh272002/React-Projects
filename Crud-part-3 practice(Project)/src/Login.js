
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function LoginPage(){

    const navigate = useNavigate();
    const[user,setUser]=useState({
 
        username:"",
        password:""
    })


    //inputHandler
    const inputHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }


    const LoginUser =(e)=>{
        e.preventDefault();
        axios.get("http://localhost:4000/admin")
        .then((res)=>{
            //console.log(res.data)
            let info = res.data;

            //js flag
            let status=false;
            info.map(item=>{
                if(item.username==user?.username && item.password==user?.password)
                {
                   status=true;
                   localStorage.setItem("userinfo", JSON.stringify(item));
                }
           

            })

            if(status)
            {
                navigate("/welcome")
            }

            else{
                alert("Check Username or Password")
            }

        }).catch(err=>console.log(err))

    }
return(<>

<div className="container">
    <form onSubmit={LoginUser}>
    <div className="row justify-content-center">
        <div className="col-md-4 p-4 bg-light shadow">
            <h3 align="center">Admin Login</h3>
            

            <div className="mb-3">
                <input type="text" placeholder="Enter UserName" className="form-control" name="username" value={user?.username} onChange={inputHandler}/>
            </div>

            <div className="mb-3">
                <input type="password" placeholder="Enter Password" className="form-control" name="password" value={user?.password} onChange={inputHandler}/>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">Login</button>
              <br/>
              <Link to="/register">New User?</Link>
            </div>
        </div>
    </div>
    </form>
</div>


    
    </>)
}