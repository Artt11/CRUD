import usersData from "./data.json";
import { setData } from "./store/dataSlice";

export const fetchData = () => {
    return (dispatch) => {
        try{
            dispatch(setData(usersData))
        }
        catch(error){
            console.log("Error fetching data", error)
        }
    }
}