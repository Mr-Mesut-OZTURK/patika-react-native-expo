import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Timestamp, doc, setDoc, collection, getDocs, query, getDoc, addDoc, onSnapshot, updateDoc, arrayUnion, increment } from "firebase/firestore";

import { ChatsAppLayout } from '@src/src/layouts'
import { firestoreDb } from '@src/src/config/firebaseConfig';
import { MyButtonOne, MyTextInputOne } from '@src/src/components';
import { useSelector } from 'react-redux';
import moment from 'moment';

const ChatScreen = ({ route }) => {

    const [chat, setChat] = useState([])
    const [loading, setLoading] = useState(false)
    const { user } = useSelector(state => state?.chat)

    const [textMessage, setTextMessage] = useState("")

    // const handleFetchChat = async () => {

    //     const querySnapshot = await getDoc(
    //         doc(firestoreDb, "chatRooms", route?.params?.item),
    //     );

    //     setChat(querySnapshot.data)
    //     console.log(querySnapshot.data)
    //     setLoading(false)
    // }

    useEffect(() => {


        const unsubscribe = onSnapshot(
            doc(firestoreDb, "chatRooms", route?.params?.item),
            { includeMetadataChanges: true },

            (doc) => {

                setChat(doc.data()?.data)

                // handleFetchChat()
            });

        return () => {
            unsubscribe();
        };

    }, [])

    const handleSendMessage = async () => {
        if (textMessage === "") return
        const name = route?.params?.item
        setLoading(true)
        const response = await updateDoc(doc(firestoreDb, "chatRooms", name), {
            count: increment(1),
            data: arrayUnion({
                message: textMessage,
                isRead: true,
                sender: user?.email ?? "",
                time: new Date(),
            })
        });

        console.log({ response })
        setTextMessage("")
        setLoading(false)
    }


    const Item = ({ item }) => {
        const isMe = item?.sender === user?.email
        return (
            <View style={styles.chat_item({ isMe })}>
                <View style={styles.chat_item_info_container({ isMe })}>
                    <Text style={styles.chat_item_sender({ isMe })}>{item.sender}</Text>
                    <Text style={styles.chat_item_time({ isMe })}>{moment(new Date(item?.time?.seconds * 1000)).fromNow()}</Text>
                </View>
                <Text style={styles.chat_item_message({ isMe })}>{item.message}</Text>
            </View>
        )
    }

    // console.log({ chat })
    return (
        <ChatsAppLayout>
            <Text style={styles.page_header}>{route?.params?.item}</Text>

            <FlatList
                inverted
                data={[...chat].reverse()}
                keyExtractor={(item, index) => index}

                renderItem={({ item, index }) => <Item item={item} />}

                style={styles.chat_container}
                contentContainerStyle={styles.flatList_container}
                scro
            />

            <View style={styles.text_input_container}>
                <MyTextInputOne
                    value={textMessage}
                    onChangeText={(a, b) => setTextMessage(b)}
                    inputContainerStyle={styles.text_input_input}
                />

                <MyButtonOne
                    containerStyle={styles.text_input_button}
                    title='Add'
                    onPress={handleSendMessage}
                />
            </View>
        </ChatsAppLayout>
    )
}

export default ChatScreen

const styles = StyleSheet.create({

    page_header: {
        marginTop: 50,
        marginBottom: 20,
        fontSize: 32,
        textTransform: 'capitalize',
    },

    text_input_container: {
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        // width: Dimensions.get("screen").width - 40,
        flex: 1,
        backgroundColor: 'pink',
        padding: 5,
        borderRadius: 10
    },
    text_input_input: {
        width: Dimensions.get("screen").width - 100,
        marginRight: 10,
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 0,
        marginBottom: 0,
        height: 50,
    },
    text_input_button: {
        // width: Dimensions.get("screen").width - 150,
        // flex: 1,
        width: 60,

    },
    chat_container: {
        flex: 1,
        width: Dimensions.get("screen").width - 20,
        paddingVertical: 20,
        // paddingTop: 190

    },
    flatList_container: {
        // backgroundColor: 'yellow',
        paddingTop: 100,
        paddingBottom: 40,


    },

    chat_item: ({ isMe }) => ({
        backgroundColor: isMe ? '#ACE1AF' : 'green',
        marginRight: isMe ? 0 : 70,
        marginLeft: isMe ? 70 : 0,
        alignContent: 'end',
        marginBottom: 10,
        padding: 15,
        borderRadius: 20,
        borderBottomLeftRadius: isMe ? 20 : 0,
        borderBottomRightRadius: isMe ? 0 : 20,
    }),
    chat_item_info_container: ({ isMe }) => ({
        flexDirection: isMe ? "row-reverse" : 'row',
        justifyContent: 'space-between',
        marginBottom: 5

    }),
    chat_item_sender: ({ isMe }) => ({
        fontSize: 14,
        color: isMe ? '#666' : 'white',

    }),
    chat_item_time: ({ isMe }) => ({
        fontSize: 12,
        color: isMe ? '#666' : 'white',

    }),
    chat_item_message: ({ isMe }) => ({
        fontSize: 20,
        color: '#fff',

    }),

})