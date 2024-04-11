import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Bottomsheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'

const EditProfile = () => {

    const renderInner = () => (
        <View>
            <Text>Hello Tuks</Text>
        </View>
    );
    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHandle}>
                <View style={styles.panelHandle}>

                </View>
            </View>
        </View>
    );

   // bs = React.createRef();
   // fall = new Animated.Value(1);
    return (
        <View style={styles.container}>
            {/* <Bottomsheet
                ref={this.bs}
                snapPoints={[330, 0]}
                renderContent={this.renderInner}
                renderHeader={this.renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
            /> */}
            <View sytle={{ margin: 10 }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ImageBackground source={require('../../../assets/images/default-profile-pic.png')}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}
                            >
                                <View>
                                    <Icon name='camera' size={35} color="#fff"
                                        style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                        John Doe
                    </Text>
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} />
                    <TextInput placeholder='First Name'
                        placeholderTextColor="#666666"
                        style={styles.TextInput}
                        autoCorrect={false} />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} />
                    <TextInput placeholder='Last Name'
                        placeholderTextColor="#666666"
                        style={styles.TextInput}
                        autoCorrect={false} />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="phone" size={20} />
                    <TextInput placeholder='Phone'
                        placeholderTextColor="#666666"
                        keyboardType='number-pad'
                        style={styles.TextInput}
                        autoCorrect={false} />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" size={20} />
                    <TextInput placeholder='Email'
                        keyboardType='email-address'
                        placeholderTextColor="#666666"
                        style={styles.TextInput}
                        autoCorrect={false} />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="globe" size={20} />
                    <TextInput placeholder='Country'
                        placeholderTextColor="#666666"
                        style={styles.TextInput}
                        autoCorrect={false} />
                </View>
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10
    },
    panelTitle: {
        fontSize: 27,
        height: 35
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7
    },
    panelButtonTitle: {
        fontSize: 17,
        borderBottomWidth: 1,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#3f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    menuWrapper: {
        marginTop: 10
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    }
})