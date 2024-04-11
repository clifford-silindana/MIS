import React,{useState} from 'react';
import { StyleSheet, Text, View,useWindowDimensions,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {
    const {code, setCode} = useState('');
    const {newPassword, setNewPassword} = useState('');
    
    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onSignInPressed = () =>{
        navigation.navigate('SignIn');
    }

    const onSubmitPressed = () =>{
        navigation.navigate('Home');
    }

   

    
return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        
      <Text style={styles.title}>Reset your password</Text>
        
      <CustomInput 
        placeholder="Code"
        value={code}
        setValue={setCode}
        />

<CustomInput 
        placeholder="Enter your new password"
        value={newPassword}
        setValue={setNewPassword}
        />

       <CustomButton text="Submit" onPress={onSubmitPressed} />
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

export default NewPasswordScreen