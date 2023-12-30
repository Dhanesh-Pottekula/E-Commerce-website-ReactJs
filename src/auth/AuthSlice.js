import {createAsyncThunk,createSlice} from '@redux/toolkit'
import { CreateUser } from './AuthApi'; 

const initialstate ={
    loggedInUser:null,
    status:"idle"
};

export const CreateuserAsync = createAsyncThunk(
    'user/createUser',
    async (userData)=>{
        const response =await CreateUser(userData);
        return response.data;
    }
)

export const counterSlice= createSlice({
    name:'counter',
    initialstate,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(CreateuserAsync.pending,(state)=>{
            state.status="loading"

        })
        .addCase(CreateuserAsync.fullfilled,(state,action)=>{
            state.status="idle"
            state.loggedInUser=action.payload;

        })
    }
})
export const selectLoggedInUser= (state)=>state.auth.loggedInUser;

export const {increment} = counterSlice.actions;
export default counterSlice.reducer;