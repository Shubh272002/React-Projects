import { useState } from "react"
import { useCart } from "./Cartmethod"
export default function ProductPage()
{
    const product=[
        {
            id:1,
            pname:"Samsung Washing machine 20Ltr",
            Price:15000,
            qty:0,
            image:"pic/p1.jpg"
        },
        {
            id:2,
            pname:"Philips Washing machine 20Ltr",
            Price:25000,
            qty:0,
            image:"pic/p2.png"
        },
        {
            id:3,
            pname:"Whirlpool Washing machine 20Ltr",
            Price:18000,
            qty:0,
            image:"pic/p3.png"
        },
        {
            id:4,
            pname:"Haire  Washing machine 20Ltr",
            Price:20000,
            qty:0,
            image:"pic/p4.jpg"
        }
    ]

    const[cart,setCart]=useCart()

    //Add Product 
    const AddItem =(id)=>{
        let mycart =[...cart];
        const checkCart = mycart.find((x)=>{

            return x.id===id;
        })
        if(!checkCart)
        {
        product.map((item)=>{
            if(item.id==id)
            {
                const itemobj ={...item,qty:item.qty+1}
                setCart([...cart,itemobj]);
                alert("Add into Cart");
              
                localStorage.setItem("cart",JSON.stringify([...cart,itemobj]));
            }
            
            
        })
    }
    else{
        alert("This item already Added")
    }
    }
    return(<>
    
        <div className="container">
            <div className="row">
                {
                    product.map(item=>
                        <div className="col-md-3" key={item.id}>
                            <div className="card">
                                <div className="card-body">
                                    <img src={item.image} width="100%" height="300"/>
                                    <h5>{item.pname}</h5>
                                    <h5>Price {item.Price}</h5>
                                    <button className="btn btn-primary" onClick={()=>AddItem(item.id)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>


    </>)
}