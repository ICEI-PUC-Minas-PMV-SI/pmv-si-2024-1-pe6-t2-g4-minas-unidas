import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Home from '../pages/Home';
import Denuncia from '../pages/Denuncia'
import Usuario from '../pages/Usuario'


const Stack = createNativeStackNavigator();

const Main = () => {

  return(
  
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Denuncia" component={Denuncia} />
    </Stack.Navigator>
    
  );

}

export default Main;