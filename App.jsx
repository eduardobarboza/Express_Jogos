import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { TextInput, Provider as PaperProvider } from 'react-native-paper';
import Jogos from './Empresa';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PageCadastrar from './Cadastrar';
import PageConsultar from './Listar';


const theme = {
  colors: {
    primary: '#04534d',
  }
};

const App = () => {
  const [dados, setJogos] = useState([]);
  const [busca, setBusca] = useState('');
  

  async function getDados(url = "") {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.json();
  }

  useEffect(() => {
    if (busca.trim() !== "") {
      getDados(`http://localhost:3000/jogo/${busca}`).then((listaDeJogos) => {
        setJogos(listaDeJogos);
      });
    } else {
      setJogos([]);
    }
  }, [busca]);

  
  const exibirItens = ({ item }) => {
    return <Jogos id={item.id} nome={item.nome} preço={item.preço} />;  
  }

const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Consultar" component={PageConsultar} />
      <Tab.Screen name="Cadastrar" component={PageCadastrar} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
 




export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listaJogos: {
    height: 600
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#03363a',
    marginVertical: 30
  },
  campoBusca: {
    width: 370,
    backgroundColor: '#ffffff',
  },
 
});
  