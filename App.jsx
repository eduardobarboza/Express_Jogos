import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Empresa from './Empresa';

const dados = [
  {Id:1, Nome: 'x', ValorDeMercado: '2999'},
  {Id:2, Nome: 'a', ValorDeMercado: '2994'},
  {Id:3, Nome: 'xx', ValorDeMercado: '2594'},
  {Id:4, Nome: 'xxf', ValorDeMercado: '25946'},
];

export default function App() {

  const exibirItens = ({item})=>{
    return <Empresa  nome={item.Nome} valorMercado={item.ValorDeMercado}/>;
  }
  
  return (
    <View style={styles.container}>
      <Text>Dados das empresas</Text>
      <View style={styles.listaEmpresa}>
        <FlatList
          data={dados}
          renderItem={exibirItens}
		      keyExtractor={(item)=>item.Id.toString()}
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
