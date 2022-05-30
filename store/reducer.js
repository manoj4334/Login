import { createStore } from "redux";

const initialState={
    users:[]
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case "REGISTER":
        return{
            ...state,
            users:[...state.users,action.payload]
        }
          default:
            return state;
        
        case "Login":
            return{
                ...state,
                user:action.payload
            }
    }
}

export default createStore(reducer)