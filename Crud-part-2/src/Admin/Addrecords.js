import TopHeaderPage from "./TopHeader";
import HeaderPage from "./Header";
export default function AddrecordPage(){
    return(
    <>
    <div className="container-fluid bg-dark text-white p-3">
        <TopHeaderPage/>
    </div>

    
            <div className="container-fluid">
                <div className="row">
                  
        <HeaderPage/>
               
                    <div className="col-md-10">
                <h2>Add Records</h2>
            </div>
                </div>
            </div>
            

    </>)
}