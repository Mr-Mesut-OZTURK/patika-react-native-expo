// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchInitialStateFromLocal = createAsyncThunk("marvel/fetchInitialStateFromLocal", async () => {}

// })


const initialState = {
    loading: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export const marvelAppSlice = createSlice({
    name: "marvel",
    initialState,
    reducers: {
        handleExample: (state, action) => {
            state.loading = "idle"
        },

    },

});


const { handleExample } = marvelAppSlice.actions;

export const marvelFunctions = {
    handleExample
};

export default marvelAppSlice.reducer;
