import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';
import Menu from './Menu';

function TelaInsert({ navigation }) {
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');

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
          <Image source={require('./assets/orcamento.png')} style={css.logo}></Image>
        </TouchableOpacity>
        <Text style={css.letra}>Novo Usuário</Text>
        <View>
          <Text style={css.letra2}>Nome</Text>
          <TextInput maxLength={20} style={css.campo} onChangeText={(text) => setNome(text)} value={nome}></TextInput>
          <Text style={css.letra2}>Login</Text>
          <TextInput maxLength={20} style={css.campo} onChangeText={(text) => setLogin(text)} value={login}></TextInput>
          <Text style={css.letra2}>Senha</Text>
          <TextInput maxLength={20} secureTextEntry={true} style={css.campo} onChangeText={(text) => setSenha(text)} value={senha}></TextInput>
          <Text style={css.letra2}>Confirmar Senha</Text>
          <TextInput maxLength={20} secureTextEntry={true} style={css.campo} onChangeText={(text) => setSenha2(text)} value={senha2}></TextInput>
          <View style={css.viewbotoes}>
            <View><Button title="Limpar" color="green" onPress={limpar} /></View>
            <View><Button title="Cadastrar" color="green" onPress={cadastrar} /></View>
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

