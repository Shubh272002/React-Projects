import { Link } from "react-router-dom";
import CoursePage from "./Course";
export default function Homepage()
{
    return(<>
    <div className="container-fluid px-5 py-2 shadow bg-light">
        <div className="row">
            <div className="col-md-3">
                <h3>Techvidya Computer</h3>
            </div>

            <div className="col-md-9">
                <ul className="nav">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/" className="nav-link">About</Link></li>
                <li><Link to="/" className="nav-link">Gallery</Link></li>
                <li><Link to="/" className="nav-link">Event</Link></li>
                <li><Link to="/" className="nav-link">Course</Link></li>
                <li><Link to="/" className="nav-link">Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
            <img src="p1.png" width="100%"/>
            </div>
        </div>
    </div>


    <div className="container-fluid p-5">
        <CoursePage/>
    </div>
    </>)
}