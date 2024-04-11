import React,{useState} from 'react';
import { StyleSheet, Text, View,useWindowDimensions,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';

const ConfirmNumberScreen = () => {
    const {code, setCode} = useState('');
    const {surname, setSurname} = useState('');
    const {idNumber, setIDNumber} = useState('');
    const {cellphone, setCellphone} = useState('');
    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');
    const {passwordRepeat, setPasswordRepeat} = useState('');
    const navigation = useNavigation();
    
    const {height} = useWindowDimensions();



    const onSignInPressed = () =>{
        navigation.navigate('SignIn');
    }

    const onConfirmPressed = () =>{
        navigation.navigate('SignIn');
    }

    const onResendPressed = () =>{
        console.warn("onResendPressed")
    }

    
return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        
      <Text style={styles.title}>Confirm Your Number</Text>
        
      <CustomInput 
        placeholder="Enter your confrimation code"
        value={code}
        setValue={setCode}
        />



       <CustomButton text="Confirm" onPress={onConfirmPressed} />
       <CustomButton text="Resend Code" onPress={onResendPressed}  type="SECONDARY"/>
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

export default ConfirmNumberScreen