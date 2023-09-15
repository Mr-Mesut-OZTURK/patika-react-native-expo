import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchInitialStateFromLocal = createAsyncThunk("chat/fetchInitialStateFromLocal", async () => {

// })

// AsyncStorage.removeItem("chatAppUser")

const initialState = {
    isAuth: false,
    accessToken: "",
    user: null,
    loading: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export const chatAppSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        reduxHandleLogin: (state, action) => {
            state.isAuth = true
            state.user = action.payload?.user
            state.accessToken = action.payload?.user?.accessToken
            AsyncStorage.setItem("chatAppUser", JSON.stringify(action.payload))
        },
        reduxChatLogout: (state, action) => {
            state.isAuth = false
            state.user = null
            state.accessToken = ""
            AsyncStorage.removeItem("chatAppUser")
        }
    },

});

// Action creators are generated for each case reducer function
const { reduxHandleLogin, reduxChatLogout } = chatAppSlice.actions;

export const chatFunctions = {
    reduxHandleLogin,
    reduxChatLogout,
};

export default chatAppSlice.reducer;
