import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View, Image } from 'react-native';
import css from './estilo/estilo';
import Menu from './Menu';

function TelaResultado({ navigation }) {
  const [users, setUsers] = useState([]);

  // Carrega dados da API selectAluno
  useEffect(() => {
    fetch('http://192.168.3.13/api/selectAluno')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => alert('Sem Registro'));
  }, []);
  
  // Carrega dados da API selectPart
  useEffect(() => {
    fetch('http://192.168.3.13/api/selectPart')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => alert('Sem Registro'));
  }, []);

  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
        <Image source={require('./assets/junina.png')} style={css.logo} />
      </TouchableOpacity>
      <Text></Text>
      <Text style={css.text}>Resultados cadastrados: {users.length}</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={css.principal}>
              <View style={css.viewletra}>
                <Text style={css.letra}>{item.nome}</Text>
                <Text style={css.letra3}>Curso: {item.curso}</Text>
                <Text style={css.letra3}>Categoria: {item.categoria}</Text>
                <Text style={css.letra3}>Nota Final: {item.total}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <Text> </Text>
      <Menu navigation={navigation} />
    </View>
  );
}

export default TelaResultado;
