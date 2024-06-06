import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Denuncia from './Denuncia';
import Usuario from './Usuario';

const Home = () => {
  const [index, setIndex] = useState(0);
  
  const [routes] = useState([
    { key: 'denuncia', title: 'Denuncia', icon: 'alert' },
    { key: 'usuario', title: 'Usuario', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    denuncia: Denuncia,
    usuario: Usuario,
    
  });

  return (
    <BottomNavigation 
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default Home;
