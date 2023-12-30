import{ createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import {fetchallProductsByFilter, fetchallProductsById } from "./ProductApi"


const initialState={
    product:[],
    status:"idle",
    totalitems:0,
    selectedProduct:null,
}

// export const fetchallProductsAsync = createAsyncThunk(
//     'product/fetchallProducts',
//     async ()=>{
        
//         const response = await fetchallProducts();
        
//         return response.data
        
//     }
// )
export const fetchallProductsByIdAsync = createAsyncThunk(
    'product/fetchallProductsById',
    async ({id})=>{
        console.log("called 1111")
        const response = await fetchallProductsById({id});
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
            .addCase(fetchallProductsByFilterAsync.pending, (state)=>{
                state.status = "loading";
                
            })
            .addCase(fetchallProductsByFilterAsync.fulfilled,(state,action)=>{
                state.status = "idle";

                state.product = action.payload.products;
                state.totalitems=action.payload.totalitems;

            })
            .addCase(fetchallProductsByIdAsync.pending,(state)=>{
                state.status="loading";
            })
            .addCase(fetchallProductsByIdAsync.fulfilled,(state,action)=>{
                state.status = "idle";
                state.selectedProduct = action.payload;
                console.log(action.payload)
            })
    }
})

export const {increment }= productSlice.actions;
export const selectAllProducts =(state)=> state.product.product;
export const selecttotalitems=(state)=>state.product.totalitems;
export const selectProductbyId=(state)=> state.product.selectedProduct;
export default productSlice.reducer;