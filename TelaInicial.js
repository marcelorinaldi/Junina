import React, { useCallback, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import css from './estilo/estilo2';
import Menu from './Menu';

const NumberSelect = ({ min, max, selectedValue, setSelectedValue }) => {
  const increment = () => {
    if (selectedValue < max) {
      setSelectedValue(selectedValue + 1);
    }
  };

  const decrement = () => {
    if (selectedValue > min) {
      setSelectedValue(selectedValue - 1);
    }
  };

  return (
    <View style={css.numberSelectContainer}>
      <TouchableOpacity onPress={decrement} style={css.numberSelectButton}>
        <Text style={css.numberSelectButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={css.numberSelectValue}>{selectedValue}</Text>
      <TouchableOpacity onPress={increment} style={css.numberSelectButton}>
        <Text style={css.numberSelectButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

function TelaInicial({ navigation, route }) {
  const [users, setUsers] = useState([]);
  const [jurado, setJurado] = useState('');
  const [aluno, setAluno] = useState('');
  const [elegancia, setElegancia] = useState(1); // Valor inicial de elegância
  const [desenvoltura, setDesenvoltura] = useState(1); // Valor inicial de desenvoltura
  const [simpatia, setSimpatia] = useState(1); // Valor inicial de simpatia
  const [sustentavel, setSustentavel] = useState(1); // Valor inicial de sustentável

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
        // Adicione aqui as lógicas adicionais para extrair dados dos usuários
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
    <ScrollView contentContainerStyle={css.container}>
      <Text style={css.text}>Usuário: {nome}</Text>
      <Image source={require('./assets/junina.png')} style={css.logo} />
      <View style={css.viewletra}>
        <Picker
          selectedValue={jurado}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setJurado(itemValue)}
        >
          <Picker.Item style={css.letra2} label="Jurado:" value="jurado" />
        </Picker>
        <Picker
          selectedValue={aluno}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setAluno(itemValue)}
        >
          <Picker.Item style={css.letra2} label="Aluno:" value="aluno" />
        </Picker>
        <View style={css.gridContainer}>
          <View style={css.gridItem}>
            <Text style={css.text}>Elegância:</Text>
            <NumberSelect min={1} max={10} selectedValue={elegancia} setSelectedValue={setElegancia} />
          </View>
          <View style={css.gridItem}>
            <Text style={css.text}>Desenvoltura:</Text>
            <NumberSelect min={1} max={10} selectedValue={desenvoltura} setSelectedValue={setDesenvoltura} />
          </View>
          <View style={css.gridItem}>
            <Text style={css.text}>Simpatia:</Text>
            <NumberSelect min={1} max={10} selectedValue={simpatia} setSelectedValue={setSimpatia} />
          </View>
          <View style={css.gridItem}>
            <Text style={css.text}>Sustentável:</Text>
            <NumberSelect min={1} max={10} selectedValue={sustentavel} setSelectedValue={setSustentavel} />
          </View>
          <View style={css.viewbotoes}>
            <View><Button title="Votar" color="orange" /></View>
          </View>
        </View>
      </View>
      <Menu navigation={navigation} />
    </ScrollView>
  );
}

export default TelaInicial;
