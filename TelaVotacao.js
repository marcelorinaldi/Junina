import React, { useCallback, useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import css from './estilo/estilo2';
import Menu from './Menu';
import axios from 'axios';

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

const fetchData = async (url, setData) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  } catch (error) {
    alert('Failed to fetch data');
    console.error(error);
  }
};

function TelaVotacao({ navigation, route }) {
  const [users2, setUsers2] = useState([]);
  const [aluno, setAluno] = useState('');
  const [scores, setScores] = useState({ n1: 1, n2: 1, n3: 1, n4: 1 });
  const token = 'Q!W@ee344%%R';

  const { id = '', nome = '' } = route.params || {};

  const fetchData2 = useCallback(() => {
    fetchData('http://192.168.3.13/api/selectAluno/', setUsers2);
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData2();
    }, [fetchData2])
  );

  const votar = async () => {
    const { n1, n2, n3, n4 } = scores;

    if (n1 && n2 && n3 && n4) {
      const total = (n1 + n2 + n3 + n4) / 4;
      try {
        await axios.post('http://192.168.3.13/api/votacao/', { token, nome, curso, ...scores, categoria, total});
        //await axios.post('http://192.168.3.13/api/votacao/', { token, aluno, ...scores, total, jurado_id: id, jurado_nome: nome });
        navigation.navigate('TelaRetorno');
      } catch (error) {
        console.error('Error submitting vote:', error);
        alert('Failed to submit vote');
      }
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <ScrollView contentContainerStyle={css.container}>
      <Image source={require('./assets/junina.png')} style={css.logo} />
      <View style={css.viewletra}>
        <Text style={css.text}>Jurado: {nome}</Text>
        <Picker
          selectedValue={aluno}
          style={{ height: 50, width: 150 }}
          onValueChange={(value) => setAluno(value)}
        >
          {users2.map((user, index) => (
            <Picker.Item key={index} style={css.letra2} label={`${user.nome} - ${user.categoria}`} value={user.categoria} />
          ))}
        </Picker>
        <View style={css.gridContainer}>
          {['Elegância', 'Desenvoltura', 'Simpatia', 'Sustentável'].map((criteria, index) => (
            <View key={index} style={css.gridItem}>
              <Text style={css.text}>{criteria}:</Text>
              <NumberSelect min={1} max={10} selectedValue={scores[`n${index + 1}`]} setSelectedValue={(value) => setScores((prev) => ({ ...prev, [`n${index + 1}`]: value }))} />
            </View>
          ))}
          <View style={css.viewbotoes}>
            <Button title="Votar" color="orange" onPress={votar} />
          </View>
        </View>
      </View>
      <Menu navigation={navigation} />
    </ScrollView>
  );
}

export default TelaVotacao;
