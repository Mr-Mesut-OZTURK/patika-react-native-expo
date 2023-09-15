import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HomeLayout } from '../layouts'

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


const apps = [
    {
        id: 1,
        name: "Jobs",
        link: 'jobs',
        icon: <MaterialIcons name="work" size={32} color="black" />
    },
    {
        id: 2,
        name: "Chats",
        link: "chats",
        icon: <MaterialIcons name="chat" size={32} color="black" />
    },
    {
        id: 3,
        name: "Diyetim",
        link: "diyetim",
        icon: <MaterialIcons name="fastfood" size={32} color="black" />
    },
    {
        id: 4,
        name: "Books",
        link: "books",
        icon: <MaterialIcons name="book" size={32} color="black" />
    },
    {
        id: 5,
        name: "Marvel",
        link: "marvel",
        icon: <MaterialIcons name="superscript" size={32} color="black" />
    },
    {
        id: 6,
        name: "Trivia",
        link: "trivia",
        icon: <MaterialIcons name="card-travel" size={32} color="black" />
    },
    {
        id: 7,
        name: "Weather",
        link: "weather",
        icon: <MaterialCommunityIcons name="weather-partly-snowy-rainy" size={32} color="black" />
    },
    {
        id: 8,
        name: "Restaurants",
        link: "restaurants",
        icon: <MaterialIcons name="restaurant" size={32} color="black" />
    },
    {
        id: 9,
        name: "Example"
    },
]

const HomeScreen = ({ navigation }) => {

    const handleGoToApp = (link) => {
        navigation.navigate(link)
    }

    return (
        <HomeLayout>
            <Text style={styles.headerText}>Mesut Patika Apps</Text>

            <ScrollView style={styles.scrollview} contentContainerStyle={{ alignItems: 'center', paddingBottom: 100 }}>
                {
                    apps.map((item, index) => {

                        return (
                            <TouchableOpacity
                                disabled={!item?.link}
                                key={index}
                                style={styles.item_container(item)}
                                onPress={() => handleGoToApp(item.link ?? "home")}
                            >

                                {item.icon}

                                <Text style={styles.item_header}>
                                    {item.name}
                                </Text>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </HomeLayout>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    headerText: {
        marginTop: 40,
        marginBottom: 20,
        fontSize: 30
    },

    scrollview: {
        paddingTop: 20,
        width: Dimensions.get("screen").width - 10,
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',

    },

    item_container: (item) => ({
        elevation: 2,
        shadowColor: item?.link ? '#171717' : '#fff',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        backgroundColor: item?.link ? 'white' : '#ccc',
        width: Dimensions.get("screen").width - 50,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }),

    item_header: {
        fontSize: 24,
        marginLeft: 15
    }
})