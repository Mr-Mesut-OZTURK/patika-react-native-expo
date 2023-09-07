import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'



const JobItem = ({ job, handleAddToFavorite }) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>
                {job?.company?.name}
            </Text>

            {/* <Text style={styles.country}>
                {job?.title}
            </Text> */}

            {
                job?.locations?.map((loc, i) => {
                    return (
                        <Text key={i} style={styles.country}>
                            {loc.name}
                        </Text>
                    )
                })
            }

            {
                job?.levels?.map((lev, i) => {
                    return (
                        <Text key={i}>
                            {lev.name}
                        </Text>
                    )
                })
            }


            <TouchableOpacity onPress={() => handleAddToFavorite(job)} style={styles.favorite_button}>
                <MaterialIcons name={job?.isFavorite ? "favorite" : "favorite-outline"} size={24} color="#F9629F" />
            </TouchableOpacity>

        </TouchableOpacity>
    )
}

export default JobItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 2,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        width: Dimensions.get("screen").width - 50,
        padding: 10,
        marginBottom: 20,
    },
    title: {
        color: '#000',
        fontSize: 20,
    },
    country: {
        color: '#666',
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 10
    },

    level: {},
    favorite_button: {
        position: 'absolute',
        right: 10,
        top: 10
    }
})