import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActivityIndicator, Dimensions, FlatList, StyleSheet } from 'react-native'

import { jobsFunction } from '@src/src/redux'
import { JobsAppLayout } from '@src/src/layouts'
import JobItem from '@src/src/apps/jobsApp/_JobItem'

const JobsHome = () => {

    const dispatch = useDispatch()
    const { jobs, loading } = useSelector((state) => state.jobs)
    const [variables, setVariables] = useState({
        pagination: {
            page: 1,
            pageSize: 20
        }
    })

    useEffect(() => {
        dispatch(jobsFunction.fetchJobsFromApi({ page: variables?.pagination?.page }))
    }, [variables])

    const handleFetchMore = () => {
        if (jobs.length) {
            setVariables({
                ...variables,
                pagination: {
                    ...variables.pagination,
                    page: variables.pagination.page + 1
                }
            })
        }
    }

    const handleAddToFavorite = (item) => {
        dispatch(jobsFunction.addToFavoriteJobs({ id: item.id }))
    }


    return (
        <JobsAppLayout>
            <FlatList
                style={styles.flatlist}
                keyExtractor={(item, index) => index}
                data={jobs}
                renderItem={({ item }, index) => (<JobItem job={item} handleAddToFavorite={handleAddToFavorite} />)}
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingTop: 20,
                    paddingBottom: 20
                }}
                onEndReached={(params) => {
                    handleFetchMore()
                }}
                ListFooterComponent={() => loading === "pending" ? <ActivityIndicator /> : null}
            />
        </JobsAppLayout>
    )
}

export default JobsHome

const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
        marginTop: 40,
        width: Dimensions.get("screen").width - 20,
    }
})