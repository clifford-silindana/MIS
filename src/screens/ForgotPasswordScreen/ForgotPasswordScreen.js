import React,{useState} from 'react';
import { StyleSheet, Text, View,useWindowDimensions,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const {idNumber, setIDNumber} = useState('');
    const {username, setUsername} = useState('');
    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();


    const onSignInPressed = () =>{
        navigation.navigate('SignIn');
    }

    const onSendPressed = () =>{
        navigation.navigate('NewPassword');
    }

   

    
return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        
      <Text style={styles.title}>Reset your password</Text>
        
      <CustomInput 
        placeholder="Username"
        value={username}
        setValue={setUsername}
        />

<CustomInput 
        placeholder="IDNumber"
        value={idNumber}
        setValue={setIDNumber}
        />



       <CustomButton text="Send" onPress={onSendPressed} />
       <CustomButton text="Back to Sign In" onPress={onSignInPressed}  type="TERTIARY"/>
       
    </View>
    </ScrollView>

   
)
};

const styles= StyleSheet.create({
    root:{
       alignItems: 'center',
       padding : 40,
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#051C60',
        margin:10,
    },
    text:{
        color:'gray',
        marginVertical:10
    },
    link:{
        color:'#FDB075'
    }
})

export default ForgotPasswordScreen