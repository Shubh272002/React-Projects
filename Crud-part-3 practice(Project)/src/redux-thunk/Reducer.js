const current ={coursedata:[]}

const MyReducer =(state=current,action)=>{

    switch(action.type)
    {
        case "FetchData":
            return {...state,coursedata:action.coursedata}
            break;

            default:
                return state;
                break;
    }

}

export default MyReducer;