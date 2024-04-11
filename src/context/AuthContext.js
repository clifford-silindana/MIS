import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userFirstName, setuserFirstName] = useState(null);
    const [userInfo, setUserInfo] = useState(null); 
    const [userID, setUserID] = useState(null); 


    const login = (Username, Password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/Drivers/Login`, {
            Username,
            Password
        })
            .then(res => {
               
                setuserFirstName(res.data.fullName);
                setUserInfo(res.data);
                setUserToken(res.data.content);
                setUserID(res.data.id);

                AsyncStorage.setItem('userFirstName', res.data.fullName);
                AsyncStorage.setItem('userInfo', res.data);
                AsyncStorage.setItem('userToken', res.data.content);
                AsyncStorage.setItem('userID', res.data.id);
               
            })
            .catch(e => {
                alert("error")
                console.log(`Error ${e}`);
            });

        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        setUserInfo(null);
        AsyncStorage.removeItem('userFirstName');
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userID');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userFirstName = await AsyncStorage.getItem('userFirstName');
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userID = await AsyncStorage.getItem('userID');

            if (userInfo !='null') {
                setuserFirstName(userFirstName);
                setUserToken(userToken);
                setUserInfo(userInfo);
                setUserInfo(userID);
            }
            setIsLoading(false);
        }
        catch (e) {
            console.log(`isLoggedIn error ${e}`)
        }
    }

    useEffect(() => {
        isLoggedIn();
    })
    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
            {children}
        </AuthContext.Provider>

    );
}