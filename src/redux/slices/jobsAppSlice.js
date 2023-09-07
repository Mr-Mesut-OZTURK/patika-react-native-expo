import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
    jobs: [],
    favoriteJobs: [],
    selectedJob: null,
    loading: 'idle', // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}



const fetchJobsFromApi = createAsyncThunk("jobs/fetchJobsFromApi", async ({ page = 1 }) => {
    const response = await axios.get(`https://www.themuse.com/api/public/jobs?page=1&items_per_page=10`)
    // console.log({ response })
    return response
})

export const jobsAppSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setSelectedJob: (state, action) => {
            state.selectedJob = action.payload
        },
        addToFavoriteJobs: (state, action) => {
            const selectedItem = state.jobs.find(item => item.id === action.payload.id)

            if (state.favoriteJobs.find(item => item.id === action.payload.id)) {
                const filtered = state.favoriteJobs.filter(item => item.id !== action.payload.id)
                state.favoriteJobs = filtered
                selectedItem.isFavorite = false
            } else {
                selectedItem.isFavorite = true
                state.favoriteJobs.push(selectedItem)
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobsFromApi.pending, (state, action) => {
            state.loading = 'pending'
        }),
            builder.addCase(fetchJobsFromApi.fulfilled, (state, action) => {
                // console.log("state ", action.payload?.data?.results)
                state.jobs = [...state.jobs, ...action?.payload?.data?.results]
                state.loading = "succeeded"

                // setTimeout(() => {
                //     state.loading = "idle"
                // }, 1000)

            }),
            builder.addCase(fetchJobsFromApi.rejected, (state, action) => {
                state.loading = "failed"
                // setTimeout(() => {
                //     state.loading = "idle"
                // }, 1000)
            })
    }
})

// Action creators are generated for each case reducer function
const { setSelectedJob, addToFavoriteJobs } = jobsAppSlice.actions

export const jobsFunction = {
    fetchJobsFromApi,
    setSelectedJob,
    addToFavoriteJobs,
}

export default jobsAppSlice.reducer