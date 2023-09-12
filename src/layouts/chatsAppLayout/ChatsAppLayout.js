import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeLayout from '../homeLayout/HomeLayout'

const ChatsAppLayout = ({ children, style }) => {
    return (
        <HomeLayout style={style}>
            {children}
        </HomeLayout>
    )
}

export default ChatsAppLayout

const styles = StyleSheet.create({})