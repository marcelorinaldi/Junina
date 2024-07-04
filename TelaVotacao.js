import React, { useCallback, useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView, Button, FlatList } from 'react-native';
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

function TelaVotacao({ navigation, route }) {
  const [users2, setUsers2] = useState([]);
  const [users, setUsers] = useState([]);
  const [jurado, setJurado] = useState('');
  const [aluno, setAluno] = useState('');
  const [nome2, setNome2] = useState('');
  const [n1, setN1] = useState('1');
  const [n2, setN2] = useState('1');
  const [n3, setN3] = useState('1');
  const [n4, setN4] = useState('1');
  const [selectedAluno, setSelectedAluno] = useState('1');
  let token = 'Q!W@ee344%%R';




  let id = '';
  let nome = '';
  if (route.params && Object.keys(route.params).length > 0) {
    ({ id, nome } = route.params);
  }



  // const fetchData2 = useCallback(() => {
  //   fetch('http://192.168.56.2/api/select/')
  //     .then(response => response.json())
  //     .then(data => setUsers2(data))
  //     .catch(error => alert('Sem Registro'));
  // }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     fetchData2();
  //   }, [fetchData2])
  // );

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    axios.get(`http://192.168.56.2/api/select_um/?token=${token}&id=${id}`)
      .then(response => {
        setUsers2(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }


  const fetchData2 = useCallback(() => {
    fetch('http://192.168.56.2/api/select/')
      .then(response => response.json())
      .then(data => setUsers2(data))
      .catch(error => alert('Sem Registro'));

    const extrairDados = () => {
      if (users2.length > 0) {
        // console.log(users2);
      }
    }
    extrairDados();

  }, [users2]);

  useFocusEffect(
    useCallback(() => {
      fetchData2();
      //console.log('=============');
      // console.log(users2);
    }, [fetchData2])
  );

  // console.log(users2);
  // var teste = '';



  const fetchData = useCallback(() => {
    fetch('http://192.168.56.2/api/votacao/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => alert('Sem Registro'));

    const extrairDados = () => {
      if (users.length > 0) {
      }
    }
    extrairDados();
  }, [users]);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  votar = () => {
    let token = 'Q!W@ee344%%R';
    if (nome2.trim() !== '' && n1.trim() !== '' && n2.trim() !== '' && n3.trim() !== '' && n4.trim() !== '') {
      // axios.post('https://api.semlimite.app.br/update/', { token, a: id, nome2, despesa2, imagem2, observacao2 })
      console.log('nome_ ' + nome2);
      console.log('1_ ' + n1);
      console.log('2_ ' + n2);
      console.log('3_ ' + n3);
      console.log('4_ ' + n4);
      const total = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4)) / 4;
      //total = (n1+n2+n3+n4)/4;
      console.log('total_ ' + total);
      axios.post('http://192.168.56.2/api/update/', { token, a: id, nome2, n1, n2, n3, n4, total })
        .then(response => {
          const data = response.data;
          console.log(data);

        })
        .catch(error => {
          console.log('Erro ao enviar dados:', error);
        });
      navigation.navigate('TelaRetorno');
    } else {
      alert('Preencher Campos!!!');
    }

  }


  return (
    <ScrollView contentContainerStyle={css.container}>
      <Image source={require('./assets/junina.png')} style={css.logo} />
      <View style={css.viewletra}>
        <Text style={css.text}>Jurado: {nome}</Text>

        <Picker
          selectedValue={aluno}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setAluno(itemValue)}
        >

          {users2.map((user, index) => (
            <Picker.Item style={css.letra2} label={`${user.nome} - ${user.categoria}`} value={user.categoria} />
          ))}


        </Picker>


        {/* <FlatList
        data={users2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text > {item.id} - {item.nome}</Text>
          
        )}
      /> */}

        {/* <Picker
        selectedValue={selectedAluno}
        onValueChange={(itemValue, itemIndex) => setSelectedAluno(itemValue)}
      >
        {users2.map((user, index) => (
          <Picker.Item key={index} label={user.nome} value={user.id} />
        ))}
      </Picker> */}

        {/* <Picker
          selectedValue={selectedAluno}
          onValueChange={(itemValue, itemIndex) => setSelectedAluno(itemValue)}
        >
          {users2.map((users2, index) => (
            <Picker.Item key={index} label={users2.nome} value={users2.id} />
          ))}
        </Picker> */}

        {/* <View>
            <Picker selectedValue={selectedAluno} onValueChange={(itemValue, itemIndex) =>
              setSelectedAluno(itemValue)}      >
              {users2.map((users2, index) => (
                <Picker.Item key={index} label={users2} value="oi" />))} </Picker></View> */}

        <View style={css.gridContainer}>
          <View style={css.gridItem}>
            <Text style={css.text}>Elegância:</Text>
            <NumberSelect min={1} max={10} onChangeText={(text) => setN1(text)} value={n1} />
          </View>
          <View style={css.gridItem}>
            <Text style={css.text}>Desenvoltura:</Text>
            <NumberSelect min={1} max={10} onChangeText={(text) => setN2(text)} value={n2} />
          </View>
          <View style={css.gridItem}>
            <Text style={css.text}>Simpatia:</Text>
            <NumberSelect min={1} max={10} onChangeText={(text) => setN3(text)} value={n3} />
          </View>
          <View style={css.gridItem}>
            <Text style={css.text}>Sustentável:</Text>
            <NumberSelect min={1} max={10} onChangeText={(text) => setN4(text)} value={n4} />
          </View>
          <View style={css.viewbotoes}>
            <View><Button title="Votar" color="orange" onPress={votar} /></View>
          </View>
        </View>
      </View>
      <Menu navigation={navigation} />
    </ScrollView >
  );
}

export default TelaVotacao;
