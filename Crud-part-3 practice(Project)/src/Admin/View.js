import TopHeaderPage from "./TopHeader";
import HeaderPage from "./Header";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";

import FetchFunction from "../redux-thunk/FetchFunction";
export default function ViewPage(){
    const mydata = useSelector(state=>state.coursedata);
    const dispatch = useDispatch();
    console.log(mydata)
const FetchCourse =()=>{
dispatch(FetchFunction())
}

useEffect(()=>{
FetchCourse();
},[])


    return(
    <>
    <div className="container-fluid bg-dark text-white p-3">
        <TopHeaderPage/>
    </div>

    
            <div className="container-fluid">
                <div className="row">
                  
        <HeaderPage/>
               
                    <div className="col-md-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>CourseId</th>
                                <th>Course Name</th>
                                <th>Fee</th>
                                <th>Duration</th>
                                <th>Faculty</th>
                                <th>Description</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mydata.map(item=>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.fee}</td>
                                        <td>{item.duration}</td>
                                        <td>{item.faculty}</td>
                                        <td>{item.description}</td>
                                        <td><button className="btn btn-primary">Edit</button></td>
                                        <td><button className="btn btn-danger">X</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                
            </div>
                </div>
            </div>
            

    </>)
}