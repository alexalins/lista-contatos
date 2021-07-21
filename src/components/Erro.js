import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

const Erro = () => {
    return(
        <Text style={style.error}>Ops... Algo deu errado, parceiro :')</Text> 
    );
};

const style = StyleSheet.create({
    error: {
      color: 'red',
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold'
    }
  });

export default Erro;