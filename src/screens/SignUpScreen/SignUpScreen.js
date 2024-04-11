import React,{useState} from 'react';
import { StyleSheet, Text, View,useWindowDimensions,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const {name, setName} = useState('');
    const {surname, setSurname} = useState('');
    const {idNumber, setIDNumber} = useState('');
    const {cellphone, setCellphone} = useState('');
    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');
    const {passwordRepeat, setPasswordRepeat} = useState('');
    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmNumber');
    }
   

    const onSignInPressed = () =>{
        navigation.navigate('SignIn');
    }

    const onPrivacyPressed = () =>{
        console.warn("onPrivacyPressed")
    }

    const onTermsOfUsePressed = () =>{
        console.warn("onTermsOfUsePressed")
    }
    
return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        
      <Text style={styles.title}>Create an account</Text>
        
      <CustomInput 
        placeholder="Name"
        value={name}
        setValue={setName}
        />

<CustomInput 
        placeholder="Surname"
        value={surname}
        setValue={setSurname}
        />

<CustomInput 
        placeholder="ID Number"
        value={idNumber}
        setValue={setIDNumber}
        />

<CustomInput 
        placeholder="Cellphone"
        value={cellphone}
        setValue={setCellphone}
        />


      <CustomInput 
        placeholder="Username"
        value={username}
        setValue={setUsername}
        />

        <CustomInput 
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
        />

<CustomInput 
        placeholder="Password Repeat"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry
        />

       <CustomButton text="Register" onPress={onRegisterPressed} />
       <Text style={styles.text}>By Registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>

       <CustomButton text="Have an account? Sign In" onPress={onSignInPressed}  type="TERTIARY"/>
       
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

export default SignUpScreen