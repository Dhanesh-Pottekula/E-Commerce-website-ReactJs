import{ createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import { fetchallProducts,fetchallProductsByFilter } from "./ProductApi"


const initialState={
    product:[],
    status:"idle",
    totalitems:0,
}

export const fetchallProductsAsync = createAsyncThunk(
    'product/fetchallProducts',
    async ()=>{
        
        const response = await fetchallProducts();
        
        return response.data
        
    }
)

export const fetchallProductsByFilterAsync = createAsyncThunk(
    'product/fetchallProductsByFilter',
    async ({filter,sort,pagination})=>{
        console.log(filter,sort)
        const response = await fetchallProductsByFilter({filter,sort,pagination});
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

                state.product = action.payload;


            })
            .addCase(fetchallProductsByFilterAsync.pending, (state)=>{
                state.status = "loading";
                
            })
            .addCase(fetchallProductsByFilterAsync.fulfilled,(state,action)=>{
                state.status = "idle";

                state.product = action.payload.products;
                state.totalitems=action.payload.totalitems;

            })
    }
})

export const {increment }= productSlice.actions;
export const selectAllProducts =(state)=> state.product.product;
export const selecttotalitems=(state)=>state.product.totalitems;
export default productSlice.reducer;