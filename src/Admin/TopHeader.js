
export default function TopHeaderPage(){
    let data = JSON.parse(localStorage.getItem("userinfo"));
    return(<>

    <div className="row">
        <div className="col-md-10">
        <h2>Admin Panel </h2>
        </div>

        <div className="col-md-2">
            User:{data.username}
        </div>
    </div>

   
   
  
    

    
    
    
    </>)
}