import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView, Dimensions } from 'react-native';
import Logo from '../../../assets/images/Logo.png'
import BackgroundImage from '../../../assets/images/background.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const SignInScreen = () => {
    const { Username, setUsername } = useState(null);
    const { Password, setPassword } = useState(null);
    const navigation = useNavigation();
    const { login } = useContext(AuthContext);
    const { height, width } = Dimensions.get('screen')

    const onSignInPressed = () => {
        navigation.navigate('Home');
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Image
                    source={BackgroundImage}
                    height={height}
                    width={width}
                    resizeMode='contain' />


                <CustomInput 
                placeholder="Username"
                    value={Username}
                    setUsername = {this.value}
                    iconName="email-outline"
                />

                <CustomInput
                    placeholder="Password"
                    value={Password}
                    setPassword = {setPassword}
                    secureTextEntry
                    iconName="lock"
                />

                <CustomButton text="Sign In" onPress={() => { login(Username, Password);
                 }} 
                 />
                <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
                <CustomButton text="Dont have an account? Create One" onPress={onSignUpPressed} type="TERTIARY" />

            </View>
        </ScrollView>


    )
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        maxWidth: 400,
        maxHeight: 300,
    },
    backgroundOmage: {

    }
})

export default SignInScreen