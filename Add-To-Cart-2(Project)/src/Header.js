import { Link } from "react-router-dom";
import { useCart } from "./Cartmethod";
export default function Header()
{
    const[cart,setCart]=useCart();
    
    return(<>
    <div className="container-fluid px-5 py-2 bg-light shadow">
        <div className="row">
            <div className="col-md-3">
                <h4>FlipKart</h4>
            </div>
            <div className="col-md-6">
                <input type="text" placeholder="Search Product" className="form-control"/>
            </div>
            <div className="col-md-3 text-end">
                <h4><Link to="/cart" className="nav-link">Cart({cart.length})</Link></h4>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <ul className="nav justify-content-center">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/" className="nav-link">Kids</Link></li>
                <li><Link to="/" className="nav-link">Mens</Link></li>
                <li><Link to="/" className="nav-link">Womens</Link></li>
                </ul>
            </div>
        </div>

    </div>
    </>)
}