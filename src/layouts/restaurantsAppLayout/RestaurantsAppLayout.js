import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeLayout from '../homeLayout/HomeLayout'

const RestaurantsAppLayout = ({ children }) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}

export default RestaurantsAppLayout

const styles = StyleSheet.create({})