import React, { useState } from 'react'
import Toast from 'react-native-toast-message';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ActivityIndicator, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { ChatsAppLayout } from '@src/src/layouts'
import { MyButtonOne, MyTextInputOne } from '@src/src/components'
import { useDispatch } from 'react-redux';
import { chatFunctions } from '@src/src/redux';


const auth = getAuth();

const Login = ({ navigation }) => {

    const dispatch = useDispatch()
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
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
                position: "bottom"
            });

            return;

        }

        try {

            const response = await signInWithEmailAndPassword(auth, values.email, values.password);

            dispatch(chatFunctions.reduxHandleLogin(response))
            setValues({ ...values, loading: false })

            Toast.show({
                type: 'success',
                text1: 'Login is successfull 👋',
                text2: `Hi! You are successfull! Welcome!`,
            });

            // navigation.navigate('chatHome');

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


    const handleGoToRegister = () => {
        navigation.navigate("register")
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

                                <Text style={styles.header_text}>Login</Text>

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

                                <MyButtonOne title='Login' onPress={handleLogin} />

                                <MyButtonOne title='Register' type="secondary" onPress={handleGoToRegister} />



                            </ScrollView>

                        </KeyboardAwareScrollView>
                    )
            }

        </ChatsAppLayout>
    )
}

export default Login

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