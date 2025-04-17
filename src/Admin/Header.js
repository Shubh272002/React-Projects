import {Link,useNavigate} from "react-router-dom";
export default function HeaderPage(){
    let data = JSON.parse(localStorage.getItem("userinfo"));

    const navigate = useNavigate();

    const Logout=(e)=>{
        e.preventDefault();
        localStorage.clear();
        navigate("/login");
    }

    return(<>

            <div className="col-md-2 bg-dark text-white" style={{height:"600px"}}>
                <ul className="nav flex-column">
                    <li><Link to="/welcome" className="nav-link">Home</Link></li>
                    <li><Link to="/profile" className="nav-link">Profile</Link></li>
                    <li><Link to="/addrecord" className="nav-link">Add Records</Link></li>
                    <li><Link to="/viewrecord" className="nav-link">View Records</Link></li>
                    <li><Link to="/logout" className="nav-link" onClick={Logout}>Logout</Link></li>
                </ul>
            </div>

    
    </>)
}