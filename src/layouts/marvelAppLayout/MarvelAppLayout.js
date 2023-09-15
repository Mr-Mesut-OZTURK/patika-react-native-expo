import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeLayout from '../homeLayout/HomeLayout'

const MarvelAppLayout = ({ children }) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}

export default MarvelAppLayout

const styles = StyleSheet.create({})