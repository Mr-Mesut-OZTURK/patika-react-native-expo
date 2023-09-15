// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchInitialStateFromLocal = createAsyncThunk("restaurants/fetchInitialStateFromLocal", async () => {}

// })


const initialState = {
    loading: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export const restaurantsAppSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {
        handleExample: (state, action) => {
            state.loading = "idle"
        },

    },

});


const { handleExample } = restaurantsAppSlice.actions;

export const restaurantsFunctions = {
    handleExample
};

export default restaurantsAppSlice.reducer;
