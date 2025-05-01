import TopHeaderPage from "./TopHeader";
import HeaderPage from "./Header";
import { useState } from "react";
import axios from "axios";
export default function AddrecordPage(){
    const[course,setCourse] = useState({
        name:"",
        fee:"",
        duration:"",
        faculty:"",
        description:""
    });

    const InputHandler=(e)=>{
        setCourse({...course,[e.target.name]:e.target.value})

    }

    const AddCourse=(e)=>{
axios.post("http://localhost:4000/newcourse",course)
.then(()=>{
    alert("Course Add SuccessFuly")
    setCourse(null);
    e.target.reset();
}).catch(err=>console.log(err))
    }


    return(
    <>
    <div className="container-fluid bg-dark text-white p-3">
        <TopHeaderPage/>
    </div>

    
            <div className="container-fluid">
                <div className="row">
                  
        <HeaderPage/>
               
                    <div className="col-md-10">
                        
                        <form onSubmit={AddCourse}>
               <div className="row justify-content-center">
                <div className="col-md-4 p-4 bg-light shadow">
                    <h3>Add Courses</h3>
                    <div className="mb-3">
                        <input type="text" placeholder="Enter Course Name" className="form-control" name="name" value={course?.name} onChange={InputHandler}/>
                    </div>

                    <div className="mb-3">
                        <input type="text" placeholder="Enter Fee" className="form-control" name="fee" value={course?.fee} onChange={InputHandler}/>
                    </div>

                    <div className="mb-3">
                        <input type="text" placeholder="Enter Duration" className="form-control" name="duration" value={course?.duration} onChange={InputHandler}/>
                    </div>

                    <div className="mb-3">
                        <input type="text" placeholder="Faculty" className="form-control" name="faculty" value={course?.faculty} onChange={InputHandler}/>
                    </div>

                    <div className="mb-3">
                        <textarea rows="5" cols="35" className="form-control" placeholder="Course Description" name="description" value={course?.description} onChange={InputHandler}>
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary">Add Course</button>
                    </div>
                </div>
               </div>
               </form>
            </div>
            
                </div>
            
            </div>
            

    </>)
}