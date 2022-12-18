// json token화 처리 
import   {createSlice , craeteAsyncThunk} from '@redux.js/toolkit'

let initiaState = {
    user:"",
    token:"",
    loading:false


}

const loginUser = craeteAsyncThunk('user',async(body)=>{
    let res = await fetch("localhost:3001",{
        method :'post',
        headers:{
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body:JSON.stringify(body)
    })
    return await res.json();
})

const authSlice = createSlice({
    name:"user",
    initiaState,
    reducers:{
        addToken:(state,action)=>{
            state.token = localStorage.getItem("token")
        },
        adduser:(state,action)=>{
            state.token = localStorage.getItem("user")
        }
    },
    extraReducers:{
        [loginUser.pending]:(state,action)=>{
            state.loading = true
        },
        [loginUser.fulfilled]:(state,{payload:{user,token}})=>{
            state.loading = false
            state.token = token;
            state.user = user
            localStorage.setItem("token",JSON.stringify(token))
            localStorage.setItem("user",JSON.stringify(user))
        },
        [loginUser.pending]:(state,action)=>{
            state.loading = true
        }
    }
})

export const { addToken,addUser} = authSlice.actions;
export default authSlice.reducer;