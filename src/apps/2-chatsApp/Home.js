import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback, useEffect, useState } from 'react'
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Timestamp, doc, setDoc, collection, getDocs, query, onSnapshot } from "firebase/firestore";
import { ActivityIndicator, Dimensions, Modal, Platform, Pressable, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { chatFunctions } from '@src/src/redux'
import { ChatsAppLayout } from '@src/src/layouts'
import { MyTextInputOne } from '@src/src/components'
import { firestoreDb } from '@src/src/config/firebaseConfig';


const Home = ({ navigation }) => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [chatRooms, setChatRooms] = useState([])
    const { user } = useSelector(state => state?.chat)
    const [refreshing, setRefreshing] = useState(false);
    const [chatRoomName, setChatRoomName] = useState("")
    const [addNewChatRoomModal, setAddNewChatRoomModal] = useState(false);


    const handleFetchChatRooms = async () => {

        setLoading(true)
        const querySnapshot = await getDocs(
            query(
                collection(firestoreDb, "chatRooms"),
            )
        );

        setAddNewChatRoomModal(false);

        let newList = []
        querySnapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
            newList.push(doc.id)
        });

        setChatRooms(newList)
        setLoading(false)

    }

    useEffect(() => {

        const q = query(collection(firestoreDb, "chatRooms"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data().name);
            });

            handleFetchChatRooms()
        });

        return () => {
            unsubscribe();
        };

    }, [])


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const handleLogout = () => {
        dispatch(chatFunctions.reduxChatLogout())
    }

    const handleChatRoomInputChange = (_, b) => {
        setChatRoomName(b)
    }

    const handleAddNewChatRoom = async () => {

        try {

            if (chatRoomName === "") {
                Toast.show({
                    type: 'error',
                    text1: 'You must enter room name!',
                    text2: `Something went wrong!`,
                });
                return
            }
            setLoading(true)

            const response = await setDoc(doc(firestoreDb, "chatRooms", chatRoomName), {
                count: 1,
                data: [{
                    message: `Bu oda ${user.email ?? ""} tarafından oluşturuldu`,
                    isRead: true,
                    sender: user?.email ?? "",
                    time: Timestamp.fromDate(new Date()),
                }]
            });

            setChatRoomName("")
            setLoading(false)
            setAddNewChatRoomModal(false)

            Toast.show({
                type: 'success',
                text1: 'Room created successfully 👋',
                text2: `Hi! You are successfull! You can chat now!`,
            });



        } catch (error) {
            console.error('Error creating room:', error);
            setChatRoomName("")
            setLoading(false)
            setAddNewChatRoomModal(false)

            Toast.show({
                type: 'error',
                text1: 'Room create failed!',
                text2: `Something went wrong!`,
            });
        }

    }

    const handleGoToChat = (item) => {
        navigation.navigate("chat", { item })
    }


    return (
        <ChatsAppLayout>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}
                contentContainerStyle={styles.scrollView}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="orange" />}
            >

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={addNewChatRoomModal}
                    onRequestClose={() => {

                        Toast.show({
                            type: 'success',
                            text1: 'Modal has been closed 👋',
                            text2: `Hi! You are successfull! Welcome!`,
                        });

                        setAddNewChatRoomModal(!addNewChatRoomModal);

                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Create new chat!</Text>

                            <MyTextInputOne
                                value={chatRoomName}
                                onChangeText={handleChatRoomInputChange}
                                inputContainerStyle={{
                                    width: Dimensions.get("screen").width - 80
                                }}
                            />

                            <View
                                style={{
                                    flexDirection: 'row',
                                }}
                            >
                                <Pressable
                                    style={[styles.button, styles.buttonClose, { marginRight: 15 }]}
                                    onPress={handleAddNewChatRoom}>
                                    {loading ? <ActivityIndicator color="orange" /> : (<Text style={styles.textStyle}>Add Room</Text>)}
                                </Pressable>

                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setAddNewChatRoomModal(false)}
                                >
                                    <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>


                <Text style={styles.header_text}>Welcome to Chat App!</Text>

                <TouchableOpacity style={styles.logout_button} onPress={handleLogout}>
                    <Text style={styles.logout_text}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.add_item_container} onPress={() => setAddNewChatRoomModal(true)}>
                    <Text style={styles.add_item_text}>Add New</Text>
                </TouchableOpacity>

                {
                    chatRooms?.map((item, index) => (
                        <TouchableOpacity
                            style={styles.chat_item_container}
                            key={index}
                            onPress={() => handleGoToChat(item)}
                        >
                            <Text style={styles.add_item_text}>{item}</Text>
                        </TouchableOpacity>
                    ))
                }


            </ScrollView>
        </ChatsAppLayout>
    )
}

export default Home

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
        // width: Dimensions.get("screen").width - 20,
        // padding: 15,
    },
    modalView: {
        width: Dimensions.get("screen").width - 40,
        // margin: 20,

        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 8,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },





    container: {
        // backgroundColor: 'red',
        width: Dimensions.get("screen").width - 20,
        // paddingVertical: 20,
        // paddingTop: 40,

    },
    scrollView: {
        alignItems: 'center',
        paddingBottom: 50,
    },

    logout_button: {
        position: "absolute",
        top: Platform.OS === "ios" ? 0 : 10,
        right: 10,
        backgroundColor: '#FFAC1C44',
        padding: 8,
        borderRadius: 3,
        // zIndex: 9,
    },
    logout_text: {
        color: '#FFAC1C',
        fontWeight: '700',
        fontSize: 18
    },
    header_text: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 100,
        marginBottom: 40,
    },


    chat_item_container: {
        elevation: 2,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        backgroundColor: 'white',
        width: Dimensions.get("screen").width - 50,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    add_item_container: {
        backgroundColor: '#f1f1f1',
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderWidth: 1,
        width: Dimensions.get("screen").width - 50,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    add_item_text: {
        fontSize: 30
    }
})