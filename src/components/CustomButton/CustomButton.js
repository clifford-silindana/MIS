import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress,text,type="PRIMARY"}) => {
return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}> 
       <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
)
};

const styles= StyleSheet.create({
    container:{
       padding:15,
       marginVertical: 5,
       alignItems:'center',
       width: '100%',
       borderRadius:5,
    },
    container_PRIMARY:{
        backgroundColor : '#3871F3',
     },
     container_TERTIARY:{

     },
     container_SECONDARY:{
        borderColor:'#3B71F3',
        borderWidth:2,
    },
    text:{
        fontWeight:'bold',
        color:'white'
    },
    text_TERTIARY:{
        color:'gray'
    },
    text_SECONDARY:{
        color:'#3B71F3'
    },
})


export default CustomButton