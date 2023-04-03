import axios from "axios";
import { GET_STUDENT } from "../utils/constants";

export const getStudent=()=>{
    return async(dispatch)=>{
        try{    
            const {data} = await axios.get("./data/student.json");
            dispatch(loadStudent(data));
        }catch(error){
            console.log(error);
        }
    }
}

export const loadStudent=(student)=>({
    type:GET_STUDENT,
    student
});


