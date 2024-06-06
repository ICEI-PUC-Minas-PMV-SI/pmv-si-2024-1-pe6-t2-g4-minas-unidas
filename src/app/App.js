import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';


import Denuncia from './pages/Denuncia';
/*import Home from './src/pages/Home'
import Login from './src/pages/Login'
import Register from './src/pages/Register'
import Auth from './src/navigations/Auth'*/

const App = () => {

  return (
    <NavigationContainer>
     
      <Denuncia/>
    </NavigationContainer>

  );

};

export default App;

