import React, { useContext } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmNumberScreen from '../screens/ConfirmNumberScreen/ConfirmNumberScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import OrderDeliveryScreen from '../screens/OrderDeliveryScreen';
import HomeScreen from '../screens/HomeScreen';
import { AuthContext } from '../context/AuthContext';
import OdersScreen from '../screens/OrdersScreen'
import ProfileScreen from '../screens/ProfileScreen/Profile'
import EditProfileScreen from '../screens/ProfileScreen/EditProfile'
import InboxScreen from '../screens/InboxScreen/Inbox'
import SettingsScreen from '../screens/SettingsScreen/Settings'
import Wallet from '../screens/WalletScreen/Wallet';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Stack = createNativeStackNavigator();


const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#fff",
                    with: 250,
                },
                drawerLabelStyle: {
                    marginLeft: -25,
                },
                headerStyle: {
                    backgroundColor: "#3b4359"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold"
                }
            }}
        >

            <Drawer.Screen name="Home" component={HomeScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                )
            }} />

            <Drawer.Screen name="Profile" component={ProfileScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="person-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Inbox" component={InboxScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                )
            }} />

            <Drawer.Screen name="Orders" component={OdersScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="person-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="OrderDeliveryScreen" component={OrderDeliveryScreen} options={{
                drawerItemStyle: { height: 0 },
                drawerIcon: ({ color }) => (
                    <Ionicons name="person-outline" size={22} color={color} />
                )
            }} />

            <Drawer.Screen name="Wallet" component={Wallet} options={{
                drawerIcon: ({ color }) => (
                    <FontAwesome5 name="coins" size={22} color={color}/>
                )
            }} />

            <Drawer.Screen name="Settings" component={SettingsScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="settings-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="EditProfile" component={EditProfileScreen} screenOptions={{ headerShown: false }} options={{
                drawerItemStyle: { height: 0 }
            }} />


        </Drawer.Navigator>
    )
}

const Navigation = () => {

    const { isLoading, userToken } = useContext(AuthContext);
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'}></ActivityIndicator>
            </View>
        )
    }
    return (

        <NavigationContainer>
            {userToken !== null ?
                <DrawerNavigation />
                :
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="ConfirmNumber" component={ConfirmNumberScreen} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                    <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="ss" component={ProfileScreen} />
                    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                    <Stack.Screen name="Settings" component={SettingsScreen} />
                    <Stack.Screen name="Wallet" component={Wallet} />
                    <Stack.Screen name="OrderDeliveryScreen" component={OrderDeliveryScreen} />
                </Stack.Navigator>
            }
        </NavigationContainer>

    )
};

export default Navigation