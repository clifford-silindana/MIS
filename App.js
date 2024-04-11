import React from 'react';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInScreen  from '././src/screens/SignInScreen/SignInScreen';
import SignUpScreen  from '././src/screens/SignUpScreen/SignUpScreen';
import ConfirmNumberScreen  from '././src/screens/ConfirmNumberScreen/ConfirmNumberScreen';
import ForgotPasswordScreen  from '././src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen  from '././src/screens/NewPasswordScreen/NewPasswordScreen';
import OrderDeliveryScreen  from '././src/screens/OrderDeliveryScreen';
import Navigation  from '././src/navigation';
import { AuthProvider } from './src/context/AuthContext';

 const App= () => {
  return (
  <AuthProvider>
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  
  },
});

export default App;
