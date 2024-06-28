import React, { useCallback, useState, fetchData, useEffect, selectedValue } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import css from './estilo/estilo';
import Menu from './Menu';

function TelaInicial({ navigation, route }) {
  const [users, setUsers] = useState([]);
  const [jurado, setJurado] = useState('');
  const [aluno, setAluno] = useState('');
  const [elegancia, setElegancia] = useState('');
  let id = '';
  let nome = '';
  if (route.params && Object.keys(route.params).length > 0) {
    ({ id, nome } = route.params);
  }

  const NumberSelect = ({ min, max, selectedValue, setSelectedValue }) => {
    const options = [];
    for (let i = min; i <= max; i++) {
      options.push(<Picker.Item key={i} label={i.toString()} value={i} />);
    }

    // const fetchData = useCallback(() => {
    //   fetch('http://192.168.56.2/api/inicial/')
    //     .then(response => response.json())
    //     .then(data => setUsers(data))
    //     .catch(error => alert('Sem Registro'));

    //   const extrairDados = () => {
    //     if (users.length > 0) {
    //       setQtd(users[0].total_orcamento);
    //       setReceita(users[0].total_receita);
    //       setDespesa(users[0].total_despesa);
    //     }
    //   }
    //   extrairDados();

    // }, [users]);

    // useFocusEffect(
    //   useCallback(() => {
    //     fetchData();
    //   }, [fetchData])
    // );

    return (
      <View style={css.container}>
        <Text style={css.text}>Usuário: {nome}</Text>
        <Image source={require('./assets/junina.png')} style={css.logo}></Image>
        <View style={css.viewletra}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(jurado)}
          >
            <Picker.Item style={css.letra2} label="Jurado:" value="jurado" />
          </Picker>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(aluno)}
          >
            <Picker.Item style={css.letra2} label="Aluno:" value="aluno" />
          </Picker>
          <Text style={css.text}>Elegância:</Text>
      <NumberSelect min={1} max={10} selectedValue={elegancia} setSelectedValue={setElegancia} />
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
}
export default TelaInicial;
