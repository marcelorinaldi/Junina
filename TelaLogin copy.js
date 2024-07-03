import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';

function TelaLogin({ navigation }) {
  const [loginx, setLoginx] = useState('');
  const [senhax, setSenhax] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoginx('');
    setSenhax('');
  }, []);

  let token = 'Q!W@ee344%%R';

  const autenticar = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://192.168.56.2/api/select_login/?token=${token}&login=${loginx}&senha=${senhax}`);
      const data = response.data;
      console.log('API Response:', data);
      setUsers(data);

      if (data && data.length > 0) {
        const primeiroItem = data[0];
        const { id, nome } = primeiroItem;
        navigation.navigate('TelaVotacao', { id, nome });
      } else {
        Alert.alert('Login ou senha incorretos.');
      }
    } catch (error) {
      console.error('Network error:', error);
      Alert.alert('Erro de rede. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const logar = () => {
    if (loginx.trim() !== '' && senhax.trim() !== '') {
      autenticar();
    } else {
      Alert.alert('Por favor, preencha os campos!');
    }
  };

  const limpar = () => {
    setLoginx('');
    setSenhax('');
  };

  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>

      <Image source={require('./assets/junina.png')} style={css.logo}></Image>

      <Text style={css.text}>Bem vindo!</Text>
      <View>
        <Text style={css.text}>Login</Text>
        <TextInput
          style={css.campo}
          onChangeText={(text) => setLoginx(text)}
          value={loginx}
          maxLength={20}
        />
        <Text style={css.text}>Senha</Text>
        <TextInput
          style={css.campo}
          onChangeText={(text) => setSenhax(text)}
          value={senhax}
          secureTextEntry={true}
          maxLength={20}
        />
        <View style={css.viewbotoes}>
          <View><Button title="Login" color="orange" onPress={logar} /></View>
          <View><Button title='Cadastrar Aluno' color="orange" onPress={() => navigation.navigate('TelaCadastroAluno')} /></View>
          <View><Button title='Cadastrar Jurado' color="orange" onPress={() => navigation.navigate('TelaCadastroJurado')} /></View>
        </View>
      </View>
      {loading && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
      <Text> </Text>
    </View>
  );
}

export default TelaLogin;
