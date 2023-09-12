import { initializeApp } from 'firebase/app';

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


import Constants from 'expo-constants';
import AsyncStorage from "@react-native-async-storage/async-storage";


// Initialize Firebase
const firebaseConfig = {
    apiKey: Constants.expoConfig?.extra?.firebaseApiKey,
    authDomain: Constants.expoConfig?.extra?.firebaseAuthDomain,
    projectId: Constants.expoConfig?.extra?.firebaseProjectId,
    storageBucket: Constants.expoConfig?.extra?.firebaseStorageBucket,
    messagingSenderId: Constants.expoConfig?.extra?.firebaseMessagingSenderId,
    appId: Constants.expoConfig?.extra?.firebaseAppId,
    measurementId: Constants.expoConfig?.extra?.firebaseMeasurementId,
    databaseURL: Constants.expoConfig?.extra?.firebaseDatabaseUrl,
};

const app = initializeApp(firebaseConfig);


const myReactNativeLocalPersistence = getReactNativePersistence({
    getItem(...args) {
        // Called inline to avoid deprecation warnings on startup.
        return AsyncStorage.getItem(...args);
    },
    setItem(...args) {
        // Called inline to avoid deprecation warnings on startup.
        return AsyncStorage.setItem(...args);
    },
    removeItem(...args) {
        // Called inline to avoid deprecation warnings on startup.
        return AsyncStorage.removeItem(...args);
    },
});

initializeAuth(app, {
    persistence: myReactNativeLocalPersistence,
});

export const firestoreDb = getFirestore(app);


module.exports