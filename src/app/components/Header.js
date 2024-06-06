import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ({ title }) => {
  return (
    <Appbar.Header style={styles.header}>
      <Image style={styles.image} source={require('D:\Projetos\pmv-si-2024-1-pe6-t2-g4-minas-unidas\src\app\assets')} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(89, 53, 154)',  // Colocando rgb() dentro de uma string
    flexDirection: 'row',  // Adicionando flexDirection para alinhar itens horizontalmente
    alignItems: 'center',  // Alinhando itens verticalmente no centro
    marginLeft: 10
  },
  image: {
    width: 40,  // Largura da imagem
    height: 40,  // Altura da imagem
    marginRight: 10  // Espaço entre a imagem e o título
  }
});

export default Header;
