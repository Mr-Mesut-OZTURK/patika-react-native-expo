import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import jobsAppSlice from './slices/jobsAppSlice'
import chatAppSlice from './slices/chatAppSlice'

export const store = configureStore({
    reducer: {
        jobs: jobsAppSlice,
        chat: chatAppSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})


const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider