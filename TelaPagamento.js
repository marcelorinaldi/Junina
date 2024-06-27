import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View, Button, TextInput, Alert, Image } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';
import Menu from './Menu';


function TelaPagamento({ navigation }) {
  const [users, setUsers] = useState([]);
  let token = 'Q!W@ee344%%R';
  useEffect(() => {
    fetch('http://192.168.56.2/api/select/')
      //fetch('https://api.semlimite.app.br/select/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => alert('Sem Registro'));
  }, []);


  const aviso = (a) => {
    if (a !== '') {

      //axios.post('https://api.semlimite.app.br/delete/', { token, a })
      axios.post('http://192.168.56.2/api/pagamento/', { token, a })
        .then(response => {
          const data = response.data;
        })
        .catch(error => {
          console.log('Erro ao enviar dados:', error);
        });
      navigation.navigate('TelaRetorno2');
    } else {
      alert('Nok');
    }
  }


  const pagar = (a, b, c, d,) => {
    Alert.alert(
      'Atenção!',
      'Informar o pagamento? \n Id:' + a + '\n' + b + '',
      [
        {
          text: 'Sim',
          onPress: () => aviso(a)
        },
        {
          text: 'Não',
          onPress: () => console.log('Cancelado'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
        <Image source={require('./assets/orcamento.png')} style={css.logo}></Image>
      </TouchableOpacity>
      <Text></Text>
      <Text style={css.text}>Informar Pagamento</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pagar(item.id, item.nome, item.receitas, item.despesas, item.obs, item.data_val)}>
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
      <Menu navigation={navigation} />
    </View>
  );
}
export default TelaPagamento;
