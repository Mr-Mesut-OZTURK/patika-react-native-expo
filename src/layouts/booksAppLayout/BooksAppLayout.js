import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeLayout from '../homeLayout/HomeLayout'

const BooksAppLayout = ({ children }) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}

export default BooksAppLayout

const styles = StyleSheet.create({})