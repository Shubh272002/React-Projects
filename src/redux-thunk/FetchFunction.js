import axios from "axios";

const FetchRecords =()=>{
     return (dispatch)=>{

        axios.get("http://localhost:4000/newcourse")
        .then((res)=>{
            console.log(res.data);
            dispatch({type:"FetchData", coursedata:res.data})
        }).catch(err=>console.log(err))



    }

}

export default FetchRecords;