// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchInitialStateFromLocal = createAsyncThunk("trivia/fetchInitialStateFromLocal", async () => {}

// })


const initialState = {
    loading: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export const triviaAppSlice = createSlice({
    name: "trivia",
    initialState,
    reducers: {
        handleExample: (state, action) => {
            state.loading = "idle"
        },

    },

});


const { handleExample } = triviaAppSlice.actions;

export const triviaFunctions = {
    handleExample
};

export default triviaAppSlice.reducer;
