import TopHeaderPage from "./TopHeader";
import HeaderPage from "./Header";

export default function ProfilePage(){
    let data = JSON.parse(localStorage.getItem("userinfo"))
    return(<>

    <div className="container-fluid bg-dark text-white p-3">
        <TopHeaderPage/>
    </div>

    <div className="container-fluid">
        <div className="row">
        <HeaderPage/>

            <div className="col-md-10">
                <div className="row justify-content-center my-3">
                    <div className="col-md-4">
                <table className="table">
                    <tr>
                        <th>Id</th>
                        <td>{data.id}</td>
                    </tr>

                    <tr>
                    <th>Name</th>
                        <td>{data.fname}</td>
                    </tr>

                    <tr>
                    <th>Email</th>
                        <td>{data.email}</td>
                    </tr>

                    <tr>
                    <th>Mobile</th>
                        <td>{data.mobile}</td>
                    </tr>

                    <tr>
                    <th>Username</th>
                        <td>{data.username}</td>
                    </tr>




                    </table>
                    </div>

                </div> 
            </div>
                 </div>
            </div>
   
    
    </>)
}