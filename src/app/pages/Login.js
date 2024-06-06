import React, { useState } from 'react';
import {TextInput, Button } from 'react-native-paper';
import {StyleSheet} from 'react-native';


import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/input'
import Header from '../components/Header'

import {useNavigation} from '@react-navigation/native'


const Login = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  return (
    <Container>

      <Header title={'Minas Unidas'} />

      <Body>
      
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left = {<TextInput.Icon name = "account" />} 
        />

        <Input
          label="Senha"
          value={senha}
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
          left = {<TextInput.Icon name = "key" />} 
        />

        <Button 
        style={styles.button}
          mode = "contained" 
          onPress = {() => console.log('Pressed')}>
          LOGIN
        </Button>

        <Button 
          style={styles.button}
          mode = "outlined" 
          onPress = {() => navigation.navigate('Register')}>
          REGISTRAR
        </Button>

      
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({

    button:{
      marginBottom: 8
    }
    
})



export default Login;
