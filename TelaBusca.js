import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image, FlatList } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';
import Menu from './Menu';

function TelaBusca({ navigation }) {
  const [loginx, setLoginx] = useState('');
  const [users, setUsers] = useState([]);
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  useEffect(() => {
    setLoginx('');
  }, []);
  let token = 'Q!W@ee344%%R';
  const autenticar = () => {
    axios.get(`http://192.168.56.2/api/select_busca/?token=${token}&login=${loginx}`)
      .then(response => {
        setUsers(response.data);
        console.log(users);
        if (users && users.length > 0) {
          const primeiroItem = users[0];
          const { id, nome } = primeiroItem;
          setNome(nome);
          setId(id);
          console.log('ok' + id + '|' + nome);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  logar = () => {
    if (loginx.trim() !== '') {
      autenticar();
    } else {
      alert('Preencher Campos!!!');
    }
  }
  limpar = () => {
    setLoginx('');
  }

  useEffect(() => {
    fetch('http://192.168.56.2/api/select/')

      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => alert('Sem Registro'));
  }, []);
  const aviso = (a, b, c, d, e) => {
    navigation.navigate('TelaUpdate', { id: a, nome: b });
  }
  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
        <Image source={require('./assets/orcamento.png')} style={css.logo}></Image>
      </TouchableOpacity>
      <Text style={css.text}>Busca</Text>
      <View>
        <TextInput placeholder="" style={css.campo} onChangeText={(text) => setLoginx(text)} value={loginx}></TextInput>
        <View style={css.viewbotoes}>
          <View><Button title="Limpar" color='green' onPress={limpar} /></View>
          <View><Button title="Buscar" color='green' onPress={logar} /></View>
        </View>
      </View>
      <Text> </Text>
      <Text></Text>
      <Text style={css.text}>Quantidade de Registros: {users.length}</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => aviso(item.id, item.nome, item.valor, item.quantidade, item.tempo)}>
            <View >
              <View style={css.viewnumero2}>
                <View style={css.principal2}>
                </View>
              </View>
              <View style={css.principal}>
                <View style={css.viewletra}>
                <Text style={css.letra2}>{item.id} - {item.nome.substring(0, 32)}</Text>
                  <Text style={css.letra2}>Receitas: R$ {item.receitas}</Text>
                  <Text style={css.letra2}>Despesas: R$ {item.despesas}</Text>
                  <Text style={css.letra2}>Observações: {item.obs}</Text>
                  <Text style={css.letra2}>Vencimento: {item.data_val}</Text>
                  <Text style={css.letra2}>{item.tempo}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )} />
      <Text> </Text>
      <Menu navigation={navigation} />
    </View>
  );
}
export default TelaBusca;
