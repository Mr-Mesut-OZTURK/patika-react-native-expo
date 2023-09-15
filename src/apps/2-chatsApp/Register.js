import React, { useState } from 'react'
import Toast from 'react-native-toast-message';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActivityIndicator, Platform, ScrollView, StyleSheet, Text } from 'react-native'

import { ChatsAppLayout } from '@src/src/layouts'
import { MyButtonOne, MyTextInputOne } from '@src/src/components'


const auth = getAuth();

const Register = ({ navigation }) => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        loading: false,
        error: "",
    })

    const handleChange = (name, e) => {
        setValues({ ...values, [name]: e })
    }


    const handleLogin = async () => {

        setValues({ ...values, loading: true })

        if (values.email === '' || values.password === '') {

            setValues({
                ...values,
                error: 'Email and password are mandatory.'
            })

            Toast.show({
                type: 'info',
                text1: 'Empty area 👋',
                text2: `Please fill ${values.email === "" ? "email" : ""} ${values.password === "" ? "password" : ""}`,
            });

            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            setValues({ ...values, loading: false })

            Toast.show({
                type: 'success',
                text1: 'Register is successfull 👋',
                text2: `Hi! You are successfull! You can login now!`,
            });

            navigation.navigate('login');
        } catch (error) {

            setValues({
                ...values,
                error: error.message,
                loading: false
            })

            Toast.show({
                type: 'error',
                text1: 'Ooops! Something went wrong!',
                text2: error?.message ?? "",
            });
        }
    }

    const handleGoToLogin = () => {
        navigation.navigate("login")
    }


    return (
        <ChatsAppLayout>

            {
                values.loading
                    ? (<ActivityIndicator />)
                    : (
                        <KeyboardAwareScrollView
                            style={{
                                marginTop: Platform.OS === "ios" ? 50 : 50,
                            }}
                            showsVerticalScrollIndicator={false}
                        >

                            <ScrollView style={{ flex: 1, paddingTop: Platform.OS === "ios" ? 150 : 100 }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', }}>

                                <Text style={styles.header_text}>Register</Text>

                                <MyTextInputOne
                                    name='email'
                                    value={values.email}
                                    onChangeText={handleChange}
                                    placeholder='Email'
                                />
                                <MyTextInputOne
                                    value={values.password}
                                    onChangeText={handleChange}
                                    name='password'
                                    placeholder='Password'
                                    secureTextEntry={true}
                                />
                                <MyTextInputOne
                                    value={values.passwordConfirm}
                                    onChangeText={handleChange}
                                    name='passwordConfirm'
                                    placeholder='Password Again'
                                    secureTextEntry={true}
                                />

                                <MyButtonOne title='Register' onPress={handleLogin} />
                                <MyButtonOne title='Login' type="secondary" onPress={handleGoToLogin} />

                            </ScrollView>
                        </KeyboardAwareScrollView>
                    )
            }

        </ChatsAppLayout>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        paddingBottom: Platform.OS === "ios" ? 30 : 0,
    },
    header_text: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20,
        alignSelf: 'center'
    }
})