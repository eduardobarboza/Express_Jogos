import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Empresa from './Empresa';

const dados = [
  {Id:1, Nome: 'x', ValorDeMercado: '2999'},
  {Id:2, Nome: 'a', ValorDeMercado: '2994'},
  {Id:3, Nome: 'xx', ValorDeMercado: '2594'}
];

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Dados das empresas</Text>
      <View style={styles.listaEmpresa}>
        <FlatList
          data={dados}
          renderItem={({item})=>{
            return(<Empresa              
                nome={item.Nome}
                valorMercado={item.ValorDeMercado}
            />)
          }}
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
  listaEmpresa:{
    height: 400
  },

});
