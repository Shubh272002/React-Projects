import { useSelector , useDispatch } from "react-redux";
import FetchRecords from "./redux-thunk/FetchFunction";
import {useEffect} from "react";

export default function CoursePage(){

    const courses = useSelector (state=>state.coursedata);
    const dispatch  = useDispatch();
   

    console.log(courses);
    const CourseInfo =()=>{
        dispatch(FetchRecords());
    }

    useEffect(()=>{
        CourseInfo();
    },[])



return(<>

<div className="container">
    <h2>Our Courses</h2>
    <div className="row">
        {
            courses.map(item=>
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5>Fee:  {item.fee}</h5>
                            <h5>Duration: {item.duration}</h5>
                            <p>
                                {item.description.substr(0,50)}
                            </p>
                            <button className="btn btn-primary">Read More</button>


                        </div>


                        </div>
                </div>        
            )
        }

    </div>
</div>





</>)




}