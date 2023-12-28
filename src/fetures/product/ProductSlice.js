import{ createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import { fetchallProducts } from "./ProductApi"


const initialState={
    product:[],
    status:"idle",
}

export const fetchallProductsAsync = createAsyncThunk(
    'product/fetchallProducts',
    async ()=>{
        console.log("create async thunk is called in ProductSlice")
        const response = await fetchallProducts();
        console.log("data", response)
        return response.data
        
    }
)


export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        increment:(state )=>{
            state.product+=1;
        },
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchallProductsAsync.pending, (state)=>{
                state.status = "loading";
                
            })
            .addCase(fetchallProductsAsync.fulfilled,(state,action)=>{
                state.status = "idle";
                console.log("action.payload",action.payload)
                state.product = action.payload;
                console.log("state .product",state.product)

            })
    }
})

export const {increment }= productSlice.actions;
export const selectAllProducts =(state)=> state.product.product;
export default productSlice.reducer;