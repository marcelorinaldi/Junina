import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';
import Menu from './Menu';

function TelaInsert({ navigation }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');

  const cadastrar = () => {
    const token = 'Q!W@ee344%%R';
    axios.post('http://192.168.56.2/api/cadastroJurado/', { token, nome, curso })
      .then(response => {
        Alert.alert('Sucesso', 'Jurado cadastrado com sucesso!');
        navigation.navigate('TelaLogin');
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
        Alert.alert('Erro', 'Erro ao cadastrar jurado. Tente novamente.');
      });
  };

limpar = () => {
  setNome('');
  setCurso('');
  
}
return (
  <SafeAreaView>
    <ScrollView>
      <View style={css.container}>
        <Text> </Text>
        <Text> </Text>
        <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
        <Image source={require('./assets/junina.png')} style={css.logo}></Image>
        </TouchableOpacity>
        <Text style={css.text}>Novo Jurado</Text>
        <View>
          <Text style={css.text}>Nome</Text>
          <TextInput maxLength={20} style={css.campo} onChangeText={(text) => setNome(text)} value={nome}></TextInput>
          <Text style={css.text}>Curso</Text>
          <TextInput maxLength={20} style={css.campo} onChangeText={(text) => setCurso(text)} value={curso}></TextInput>
          <View style={css.viewbotoes}>
            <View><Button title="Limpar" color="orange" onPress={limpar} /></View>
            <View><Button title="Cadastrar" color="orange" onPress={cadastrar} /></View>
          </View>
        </View>
        <Text> </Text>
        <Menu navigation={navigation} />
      </View>
    </ScrollView>
  </SafeAreaView>
);
  }
export default TelaInsert;

