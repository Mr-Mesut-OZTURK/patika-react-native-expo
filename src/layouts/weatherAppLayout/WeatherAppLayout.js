import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeLayout from '../homeLayout/HomeLayout'

const WeatherAppLayout = ({ children }) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}

export default WeatherAppLayout

const styles = StyleSheet.create({})