// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchInitialStateFromLocal = createAsyncThunk("diyetim/fetchInitialStateFromLocal", async () => {}

// })


const initialState = {
    loading: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export const weatherAppSlice = createSlice({
    name: "diyetim",
    initialState,
    reducers: {
        handleExample: (state, action) => {
            state.loading = "idle"
        },

    },

});


const { handleExample } = weatherAppSlice.actions;

export const weatherFunctions = {
    handleExample
};

export default weatherAppSlice.reducer;
