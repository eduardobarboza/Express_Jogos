import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';
import Empresa from './Empresa';

const dados = [
  {id:1, nome: 'x', valorMercado: '2999'},
  {id:2, nome: 'a', valorMercado: '2994'},
  {id:3, nome: 'x', valorMercado: '2594'}, 
  {id:4, nome: 'h', valorMercado: '2594'}, 
  {id:5, nome: 'v', valorMercado: '2594'}, 
];


export default function App() {

  const renderItem = ({ item }) => (
    <Empresa nome={item.nome} valorMercado={item.valorMercado}/>
  );

  return (
    <View style={styles.container}>
      <Text>Dados</Text>

        <View style={styles.scroll}>
          <FlatList
            data={dados}
            renderItem={renderItem}
          />
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  scroll:{
    height: 300
  },

});
