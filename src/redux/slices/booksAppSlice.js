// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchInitialStateFromLocal = createAsyncThunk("books/fetchInitialStateFromLocal", async () => {}

// })


const initialState = {
    loading: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export const booksAppSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        handleExample: (state, action) => {
            state.loading = "idle"
        },

    },

});


const { handleExample } = booksAppSlice.actions;

export const booksFunctions = {
    handleExample
};

export default booksAppSlice.reducer;
