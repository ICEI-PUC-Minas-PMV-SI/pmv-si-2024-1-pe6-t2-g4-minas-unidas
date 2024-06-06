import React, { useState } from 'react';
import {TextInput, Button } from 'react-native-paper';
import {StyleSheet} from 'react-native';


import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/input'
import Header from '../components/Header'

import {useNavigation} from '@react-navigation/native'

const Register = () => {

  const navigation = useNavigation()

  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');
  const [validaEmail, setValidaEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [validaSenha, setValidaSenha] = useState('');


  return (
    <Container>

      <Header title={'Minas Unidas'} />

      <Body>

        <Input
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          left = {<TextInput.Icon name = "account-details" />} 
        />

        <Input
          label="Data de Nascimento"
          value={dataNasc}
          onChangeText={(text) => setDataNasc(text)}
          left = {<TextInput.Icon name = "calendar" />} 
          variant="date"
        />

        <Input
          label="Cidade"
          value={cidade}
          onChangeText={(text) => setCidade(text)}
          left = {<TextInput.Icon name = "city-variant" />} 
        />

        <Input
          label="Estado"
          value={estado}
          onChangeText={(text) => setEstado(text)}
          left = {<TextInput.Icon name = "sign-real-estate" />} 
        />
      
        <Input
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left = {<TextInput.Icon name = "email" />} 
        />

        <Input
          label="Confirme seu e-mail"
          value={validaEmail}
          onChangeText={(text) => setValidaEmail(text)}
          left = {<TextInput.Icon name = "email" />} 
        />

        <Input
          label="Senha"
          value={senha}
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
          left = {<TextInput.Icon name = "key" />} 
        />

        <Input
          label="Senha"
          value={validaSenha}
          secureTextEntry
          onChangeText={(text) => setValidaSenha(text)}
          left = {<TextInput.Icon name = "key" />} 
        />

        <Button 
        style={styles.button}
          mode = "contained" 
          onPress = {() => console.log('Pressed')}>
          REGISTRAR
        </Button>

        <Button 
          style={styles.button}
          mode = "outlined" 
          onPress = {() => navigation.goBack()}>
          CANCELAR
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



export default Register;
