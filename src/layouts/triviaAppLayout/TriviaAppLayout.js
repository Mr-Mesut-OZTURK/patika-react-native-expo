import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeLayout from '../homeLayout/HomeLayout'

const TriviaAppLayout = ({ children }) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}

export default TriviaAppLayout

const styles = StyleSheet.create({})