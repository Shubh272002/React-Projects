import Header from "./Header";
import { useCart } from "./Cartmethod";
export default function CartPage()
{
    const[cart,setCart]=useCart();

//Total Amount
const TotalAmount=()=>
{
    let total=0;
    cart.map(item=>{
        total+=item.Price*item.qty;
    })
    return total;
}


//remove Item
const RemoveItem=(pid)=>{
    if(window.confirm("Are You Sure?"))
    {
let index = cart.findIndex(item=>item.id==pid   )
cart.splice(index,1);
setCart([...cart]);
localStorage.setItem('cart', JSON.stringify(cart));
alert("Item Removed from List")
    }
}

//Increment
const Increment=(pid)=>{
   
    let mycart =[...cart];
    
    setCart(mycart=>
    mycart.map(item=>
        item.id==pid?{...item,qty:item.qty+1}:item
    
    )
    
    
    )
    localStorage.setItem("cart",JSON.stringify(mycart))
    
    }

    //Dncrement
const Decrement=(pid)=>{
   
    let mycart =[...cart];
    
    setCart(mycart=>
    mycart.map(item=>
        item.id==pid?{...item,qty:item.qty-1}:item
    
    )
    
    
    )
    localStorage.setItem("cart",JSON.stringify(mycart))
    
    }

    return(<>
    <Header/>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-12">
                {cart.length<1?(<h2 align="center">
                    Cart is Empty
                    </h2>):
                    (<>
                    
                    <div className="row justify-content-between">
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                        <th>Image</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(item=>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.pname}</td>
                                                <td>{item.Price}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={()=>Increment(item.id)}>+</button>
                                                    {item.qty}
                                                    <button className="btn btn-primary" onClick={()=>Decrement(item.id)}>-</button>
                                                    </td>
                                                    
                                                <td>{item.qty*item.Price}</td>
                                                <td><img src={item.image} width="50"/></td>
                                                <td><button className="btn btn-danger" onClick={()=>RemoveItem(item.id)}>X</button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 align="center">Total Amount</h5>
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Total Amount</th>
                                            <th>{TotalAmount()}</th>

                                                </tr>
                                                <tr>
                                                    <th colspan="2">
                                                        <button className="btn btn-primary">Checkout</button>
                                                    </th>
                                                </tr>
                                                </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </>)}
            </div>
        </div>
    </div>
    </>)
}