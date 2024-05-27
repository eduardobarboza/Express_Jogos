import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

export default function Jogos({ id, nome, preço }){
    return(
        <View style={estilo.container}>
            <Text style={estilo.info}>{id}</Text>
            <Text style={estilo.info}>{nome}</Text>
            <Text style={estilo.info}>{preço}</Text>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {        
        flexDirection: 'row',
        padding: 10,
        width: 400
    },
    info:{
        backgroundColor: '#02a88d',
        width:185,
        margin: 2,
        fontSize:18,
        paddingVertical: 10,
        paddingStart: 5
    }
});