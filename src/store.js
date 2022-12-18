import {configureStore} from "@redux.js/toolkit";
import authSlice from "./redux/authSlice";



const store = configureStore({
    reducer : {
        user:authSlice
    }
})

export default store;