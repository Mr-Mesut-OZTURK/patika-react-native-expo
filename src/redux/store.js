import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import jobsAppSlice from './slices/jobsAppSlice'
import chatAppSlice from './slices/chatAppSlice'
import diyetimAppSlice from './slices/diyetimAppSlice'
import booksAppSlice from './slices/booksAppSlice'
import marvelAppSlice from './slices/marvelAppSlice'
import triviaAppSlice from './slices/triviaAppSlice'
import weatherAppSlice from './slices/weatherAppSlice'
import restaurantsAppSlice from './slices/restaurantsAppSlice'

export const store = configureStore({
    reducer: {
        jobs: jobsAppSlice,
        chat: chatAppSlice,
        diyetim: diyetimAppSlice,
        boosk: booksAppSlice,
        marvel: marvelAppSlice,
        trivia: triviaAppSlice,
        weather: weatherAppSlice,
        restaurant: restaurantsAppSlice,
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