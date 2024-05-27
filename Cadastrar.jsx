import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert  } from 'react-native';
import axios from 'axios';

const PageCadastrar = () => {
  const [nome, setNome] = useState('');
  const [id, setId] = useState('');
  const [preço, setPreço] = useState('');
  


  const handleSubmit = async () => {
    try {
      let j = {
        nome,
        id,
        preço,
      };
      console.log(j);
      const response = await axios.post('http://localhost:3000/jogo', j);
      
      
      if (response.status === 201) {
        Alert.alert('Sucesso', 'jogo cadastrado com sucesso!');
        
        setNome('');
        setId('');
        setPreço('');
        
      } else {
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o jogo.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar jogo:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o jogo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nome do Jogo:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <Text>Id:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setId(text)}
        value={id}
      />
      <Text>Preço:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPreço(text)}
        value={preço}
      />
      
      <Button title="Cadastrar" onPress={handleSubmit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  butão: {
    backgroundColor: '#02a88d'
  }
});

export default PageCadastrar;