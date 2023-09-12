import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";


import { Ionicons } from "@expo/vector-icons";

const MyTextInputOne = ({
    name = "",
    error = false,
    value = "",
    placeholder = "",
    keyboardType = "default",
    maxLength = 50,
    secureTextEntry,
    inputContainerStyle = null,
    handleBlur = () => null,
    onChangeText = () => null,
}) => {
    const [issFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const onBlur = (e) => {
        setIsFocused(false);
        handleBlur(name, true);
    };

    return (
        <View>
            <View
                style={{
                    ...styles.container,
                    borderColor: error
                        ? "red"
                        : issFocused
                            ? "orange"
                            : "#ccc",
                    backgroundColor: '#fff',
                    ...inputContainerStyle,
                }}
            >
                <TextInput
                    autoCapitalize="none"

                    id={name}
                    name={name}
                    keyboardType={keyboardType}
                    style={{
                        flex: 1,
                        paddingBottom: 8,
                        paddingTop: 8,
                        alignSelf: "center",
                    }}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={(e) => onChangeText(name, e)}
                    onFocus={handleFocus}
                    onBlur={onBlur}
                    maxLength={maxLength}
                    secureTextEntry={showPassword ? false : secureTextEntry}
                />

                {/* <TouchableOpacity>
                    <Text style={styles.buttonText}>Degistir</Text>
                </TouchableOpacity> */}

                {secureTextEntry && (
                    <Ionicons
                        onPress={() => setShowPassword(!showPassword)}
                        name={`md-eye-${showPassword ? "" : "off-"}outline`}
                        size={24}
                        color="black"
                    />
                )}
            </View>

            {error && <Text style={{ color: "red" }}>{error}</Text>}
        </View>
    );
};

export default MyTextInputOne;

const styles = StyleSheet.create({
    container: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 60,
        width: Dimensions.get("screen").width - 40,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    inputStyle: {
        // width: '100%',
        // backgroundColor:'red',
        // fontSize: 14,
    },

    buttonText: {
        color: "orange",
        // fontFamily: 'robotoBold',
        // fontWeight: '700'
    }
});
