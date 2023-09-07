import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import jobsAppSlice from './slices/jobsAppSlice'

export const store = configureStore({
    reducer: {
        jobs: jobsAppSlice
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