import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const MyButtonOne = ({ title = "", onPress = () => null, onLongPress = () => null, icon, disabled = false, type = "primary", containerStyle = null }) => {

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ ...styles.container[type]({ disabled }), ...containerStyle }}
        >
            {icon}
            <Text
                style={styles.text[type]({ disabled })}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default MyButtonOne;

const styles = StyleSheet.create({
    container: {
        primary: (prop) => ({
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 60,
            width: Dimensions.get("screen").width - 40,
            marginBottom: 10,
            marginTop: 10,
            backgroundColor: prop.disabled ? "#ccc" : "orange",
        }),
        secondary: (prop) => ({
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 60,
            width: Dimensions.get("screen").width - 40,
            marginBottom: 10,

            borderWidth: 2,
            backgroundColor: prop.disabled ? "gray" : "#fff",
            borderColor: prop.disabled ? "gray" : "orange",
        })
    },

    text: {
        primary: (prop) => ({
            color: prop.disabled ? "#999" : '#fff',
            fontSize: 16,
            lineHeight: 24,
            fontWeight: "bold",

        }),
        secondary: (prop) => ({
            // color: theme.colors.white,
            fontSize: 16,
            lineHeight: 24,
            fontWeight: "bold",
        })
    },
});
