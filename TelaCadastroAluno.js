import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import css from './estilo/estilo';
import axios from 'axios';
import Menu from './Menu';

function TelaInsert({ navigation }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [categoria, setCategoria] = useState('');

  const categorias = [
    { label: 'Miss', value: 'miss' },
    { label: 'Mister', value: 'mister' },
  ];

  cadastrar = () => {
    let token = 'Q!W@ee344%%R';
    if (senha2.trim() == senha.trim()) {
      if (nome.trim() !== '' && senha.trim() !== '') {
        alert(nome + '\n cadastrado com sucesso!');
        console.log(nome,login,senha);
        axios.post('http://192.168.56.2/api/cadastro/', { token, login, nome, senha })
        //axios.post('https://api.semlimite.app.br/cadastro/', { token, nome, login,senha })
          .then(response => {
            const data = response.data;
            aviso = 0;
          })
          .catch(error => {
            console.log('Erro ao enviar dados:', error);
          });
        navigation.navigate('TelaLogin');
      }else {
        alert('Por favor, preencha todos os campos!');
      }
    }else {
      alert('As senhas não coincidem!');
    }
  }

limpar = () => {
  setNome('');
  setLogin('');
  setSenha('');
  setSenha2('');
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
        <Text style={css.text}>Novo participante</Text>
        <View>
          <Text style={css.text}>Nome</Text>
          <TextInput maxLength={20} style={css.campo} onChangeText={(text) => setNome(text)} value={nome}></TextInput>
          <Text style={css.text}>Curso</Text>
          <TextInput maxLength={20} style={css.campo} onChangeText={(text) => setCurso(text)} value={curso}></TextInput>
          <Text style={css.text}>Categoria</Text>
          <RadioGroup style={css.radio}
              radioButtons={categorias}
              onPress={(radioButtonsArray) => {
                const selectedButton = radioButtonsArray.find(radioButton => radioButton.selected);
                setCategoria(selectedButton ? selectedButton.value : '');
              }}
              layout="row"
            />
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

