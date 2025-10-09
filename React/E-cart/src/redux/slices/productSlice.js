import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//action return promise
export const fetchproducts = createAsyncThunk(
  "products/fetchproducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/products");

    // console.log(result.data.products);
    sessionStorage.setItem("allProducts", JSON.stringify(result.data.products)); //data stored in sessionstorage

    return result.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    dummyAllProducts: [],
    loading: false,
    errorMsg: "",
  },
  reducers: {
    searchProduct: (state, actionbyHeader) => {
      state.allProducts = state.dummyAllProducts.filter((item) =>
        item.title.toLowerCase().includes(actionbyHeader.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.fulfilled, (state, apiResult) => {
      state.allProducts = apiResult.payload;
      state.dummyAllProducts = apiResult.payload;
      state.loading = false;
      state.errorMsg = "";
    });
    builder.addCase(fetchproducts.pending, (state) => {
      state.allProducts = [];
      state.dummyAllProducts = [];
      state.loading = true;
      state.errorMsg = "";
    });
    builder.addCase(fetchproducts.rejected, (state) => {
      state.allProducts = [];
      state.dummyAllProducts = [];
      state.loading = false;
      state.errorMsg = "API call failed...";
    });
  },
});

export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;
