
import { Link, navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function RegisterPage(){
    const[user,setUser]=useState({
        fname:"",
        email:"",
        mobile:"",
        username:"",
        password:""
    })


    //inputHandler
    const inputHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }


    const SubmitData =(e)=>{
        axios.post("http://localhost:4000/admin",user)
        .then(()=>{
            alert('Admin Registerd SuccessFully');
            setUser(null);
            e.target.reset();

        }).catch(err=>alert(err));

    }
return(<>

<div className="container">
    <form onSubmit={SubmitData}>
    <div className="row justify-content-center">
        <div className="col-md-4 p-4 bg-light shadow">
            <h3 align="center">Admin Register Form</h3>
            <div className="mb-3">
                <input type="text" placeholder="Enter Name" className="form-control" name="fname" value={user?.fname} onChange={inputHandler}/>
            </div>

            <div className="mb-3">
                <input type="text" placeholder="Enter Email" className="form-control" name="email" value={user?.email} onChange={inputHandler}/>
            </div>

            <div className="mb-3">
                <input type="text" placeholder="Enter Mobile" className="form-control" name="mobile" value={user?.mobile} onChange={inputHandler}/>
            </div>

            <div className="mb-3">
                <input type="text" placeholder="Enter UserName" className="form-control" name="username" value={user?.username} onChange={inputHandler}/>
            </div>

            <div className="mb-3">
                <input type="password" placeholder="Enter Password" className="form-control" name="password" value={user?.password} onChange={inputHandler}/>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">Register</button>
              <br/>
              <Link to="/login">Already Registerd?</Link>
            </div>
        </div>
    </div>
    </form>
</div>


    
    </>)
}