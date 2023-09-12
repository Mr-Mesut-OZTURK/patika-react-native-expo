import { Button, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

import { navigate } from '../../routes/RootNavigation'

const HomeLayout = ({ children, style }) => {

    const route = useRoute();

    const handlePress = () => {
        navigate("home");
    }

    return (
        <View style={{ ...styles.container, ...style }}>

            {
                route.name !== "home" && (
                    <TouchableOpacity
                        onPress={handlePress}
                        style={styles.button}
                        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                    >
                        <Text style={styles.goBackText}>
                            Go Back
                        </Text>
                    </TouchableOpacity>
                )
            }
            {children}
        </View>
    )
}

export default HomeLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 60 : 60,
        paddingBottom: Platform.OS === "ios" ? 60 : 60,
    },
    button: {
        position: 'absolute',
        top: Platform.OS === "ios" ? 60 : 70,
        left: 20,
        backgroundColor: '#000',
        borderRadius: 3,
        padding: 8,
        zIndex: 10,
    },
    goBackText: {
        color: '#fff',

    }
})