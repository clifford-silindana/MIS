import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, iconName }) => {
    const [input, setinput] = useState(null);
    return (
        <View style={styles.container}>

            <View style={styles.input}>
                <Icon name={iconName} size={22} style={{ fontSize: 22, color: "rgb(59, 67, 89)", marginRight: 10 }} />
                <TextInput
                    onChange={(e) => { setinput(e.target.value) }}
                    value={value}
                    setValue={setValue}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry} style={{ height: 55, width: '100%', backgroundColor: '#fff' }} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        height: 55,
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
        border: '0px solid white'
    }
})


export default CustomInput