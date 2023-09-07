import React from 'react'
import { Dimensions, FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { JobsAppLayout } from '@src/src/layouts'
import JobItem from '@src/src/apps/jobsApp/_JobItem'

const FavoriteJobs = () => {


    const dispatch = useDispatch()
    const { favoriteJobs: jobs, loading } = useSelector((state) => state.jobs)


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
            // onEndReached={(params) => {
            //     handleFetchMore()
            // }}
            // ListFooterComponent={() => loading === "pending" ? <ActivityIndicator /> : null}
            />
        </JobsAppLayout>
    )
}

export default FavoriteJobs

const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
        marginTop: 40,
        width: Dimensions.get("screen").width - 20,
    }
})