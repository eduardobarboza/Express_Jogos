import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { TextInput, Provider as PaperProvider } from 'react-native-paper';
import Jogos from './Empresa';  

const theme = {
  colors: {
    primary: '#04534d',
  }
};

const PageConsultar = () => {
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

  const handleRegister = async () => {
    try {
      await postDados(`http://localhost:3000/jogo`, {
        id,
        nome,
        preço
      });
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      setId('');
      setNome('');
      setPreço('');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro', 'Erro ao cadastrar usuário');
    }
  };

  const exibirItens = ({ item }) => {
    return <Jogos id={item.id} nome={item.nome} preço={item.preço} />;  
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogos</Text>
      <View>
        <PaperProvider theme={theme}>
          <TextInput
            style={styles.campoBusca}
            label='Buscar ...'
            value={busca}
            onChangeText={(text) => setBusca(text)} 
          />
          
        </PaperProvider>
      </View>
      <View style={styles.listaJogos}>
        <FlatList
          data={dados}
          renderItem={exibirItens}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

     

    </View>
  );
}

export default PageConsultar;

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
  