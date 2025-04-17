import TopHeaderPage from "./TopHeader";
import HeaderPage from "./Header";
import {useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


export default function EditPage(){

    const navigate = useNavigate();
    const[course,setCourse] = useState({
        name:"",
        fee:"",
        duration:"",
        faculty:"",
        description:""

    })


    const InputHandler =(e)=>{
        setCourse({...course,[e.target.name]:e.target.value})
    }

    const{id} = useParams("id");

    const fetchbyid =()=>{
        axios.get("http://localhost:4000/newcourse/" + id)
        .then(res=>{
           
            setCourse(res.data)
        }).catch(err=>console.log(err))
    }


    const UpdateRecords =()=>{
        axios.put(" http://localhost:4000/newcourse/" + id, course )
        .then(()=>{
            alert("Data Updated :)");
            navigate("/viewrecord")
        }).catch(err=>console.log(err))
    }


    useEffect(()=>{
        fetchbyid();
    },[])

    
    return(<>

    <div className="container-fluid bg-dark text-white p-3">
        <TopHeaderPage/>
    </div>

    <div className="container-fluid">
        <div className="row">
        <HeaderPage/>


            <div className="col-md-10">
                <form onSubmit={UpdateRecords}>
                <div className="row justify-content-center">
                    <div className="col-md-4 p-4 bg-light shadow">
                        <h4>Edit Records</h4>

                        <div className="mb-3">
                            <label className="mb-2">Course Name</label>
                            <input type="text" name="name" value={course?.name} className="form-control" onChange={InputHandler}/>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Fee</label>
                            <input type="text" name="fee" value={course?.fee} className="form-control" onChange={InputHandler}/>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Duration</label>
                            <input type="text" name="duration" value={course?.duration} className="form-control" onChange={InputHandler}/>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Faculty</label>
                            <input type="text" name="faculty" value={course?.faculty} className="form-control" onChange={InputHandler}/>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Description</label>
                            <textarea rows="5" cols="35" name="description" value={course?.description} className="form-control" onChange={InputHandler}/>
                        </div>
                        

                        <button className="btn btn-primary">Update</button>
                        <button  onClick={()=>navigate("/viewrecord")}className="btn btn-warning mx-4">Back To View</button>


                    </div>
                </div>


                </form>
            </div>
            
                 </div>
            </div>
   
    
    </>)
}