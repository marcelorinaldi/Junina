import React, { useCallback, useState, fetchData, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import css from './estilo/estilo';
import Menu from './Menu';

function TelaInicial({ navigation, route }) {
  const [users, setUsers] = useState([]);
  const [qtd, setQtd] = useState('');
  const [receita, setReceita] = useState('');
  const [despesa, setDespesa] = useState('');
  let id = '';
  let nome = '';
  if (route.params && Object.keys(route.params).length > 0) {
    ({ id, nome } = route.params);
  }

  const fetchData = useCallback(() => {
    fetch('http://192.168.56.2/api/inicial/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => alert('Sem Registro'));

    const extrairDados = () => {
      if (users.length > 0) {
        setQtd(users[0].total_orcamento);
        setReceita(users[0].total_receita);
        setDespesa(users[0].total_despesa);
      }
    }
    extrairDados();

  }, [users]);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  return (
    <View style={css.container}>
      <Text style={css.text}>Administrador: {nome}</Text>
      <Image source={require('./assets/orcamento.png')} style={css.logo}></Image>
      <View style={css.viewletra}>
        <Text style={css.letra2}>Orçamentos: {qtd}</Text>
        <Text style={css.letra2}>Receitas: R$ {receita}</Text>
        <Text style={css.letra2}>Despesas: R$ {despesa}</Text>
      </View>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Menu navigation={navigation} />
    </View>
  );
}
export default TelaInicial;
