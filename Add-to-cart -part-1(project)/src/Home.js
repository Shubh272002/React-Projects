import Header from "./Header";
import ProductPage from "./Product";
export default function Homepage()
{
    return(<>
    <Header/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <img src="pic/banner.png" width="100%"/>
            </div>
        </div>
    </div>
<div className="container-fluid mt-5 p-5">
    <ProductPage/>
</div>

    </>)
}