import React, { useState } from 'react';
import { View, StyleSheet, Text,  Alert } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/input';


const Denuncia = () => {
  const [Nome, setNome] = useState('');
  const [DataNasc, setDataNasc] = useState('');
  const [Cidade, setCidade] = useState('');
  const [Estado, setEstado] = useState('');
  const [Email, setEmail] = useState('');
  const [TipoViolencia, setTipoViolencia] = useState('');
  const [DescDenuncia, setDescDenuncia] = useState('');
  const [Res, setRes] = useState('');

  const handleDenuncia = () => {
    if (!Nome) {
      setRes('Nome não preenchido');
      return;
    }
    // Outros tratamentos de denúncia
  };

  return (
    <Container>
      <Header title={'Minas Unidas'} />
      <Body>
        <Input
          label="Nome"
          value={Nome}
          onChangeText={(text) => setNome(text)}
        />
        <Input
          label="Data de Nascimento"
          value={DataNasc}
          onChangeText={(text) => setDataNasc(text)}
        />
        <Input
          label="Cidade"
          value={Cidade}
          onChangeText={(text) => setCidade(text)}
        />
        <Input
          label="Estado"
          value={Estado}
          onChangeText={(text) => setEstado(text)}
        />
        <Input
          label="Tipo de Violência"
          selectedValue={TipoViolencia}
          onValueChange={(value) => setTipoViolencia(value)}
          //value={TipoViolencia} // Para manter o mesmo estilo
        />
        <Input
          label="Email"
          value={Email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Descrição da Denúncia"
          value={DescDenuncia}
          onChangeText={(text) => setDescDenuncia(text)}
        />

        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Cancelar
          </Button>
          <Button mode="contained" onPress={handleDenuncia}>
            Publicar
          </Button>
        </View>

        <Text>{Nome}</Text>
        <Text>{DataNasc}</Text>
        <Text>{Cidade}</Text>
        <Text>{Estado}</Text>
        <Text>{Email}</Text>
        <Text>{DescDenuncia}</Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default Denuncia;
