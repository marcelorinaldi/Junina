import React, { useState } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import axios from 'axios';
import css from './estilo/estilo';
import Menu from './Menu';

function TelaInsert({ navigation }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [categoria, setCategoria] = useState('');

  const [categorias, setCategorias] = useState([
    { id: '1', label: 'Miss', value: 'miss', selected: false },
    { id: '2', label: 'Mister', value: 'mister', selected: false },
  ]);

  const cadastrar = () => {
    const token = 'Q!W@ee344%%R';
    axios.post('http://192.168.3.13/api/cadastro/', { token, nome, curso, categoria })
      .then(response => {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        navigation.navigate('TelaLogin');
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
        Alert.alert('Erro', 'Erro ao cadastrar usuário. Tente novamente.');
      });
  };

  const limpar = () => {
    setNome('');
    setCurso('');
    setCategoria('');
    setCategorias(categorias.map(c => ({ ...c, selected: false })));
  };

  const handleCategoriaChange = (selectedId) => {
    const updatedCategorias = categorias.map(c => ({
      ...c,
      selected: c.id === selectedId,
    }));
    const selectedButton = updatedCategorias.find(radioButton => radioButton.selected);
    setCategorias(updatedCategorias);
    setCategoria(selectedButton ? selectedButton.value : '');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={css.container}>
          <Text> </Text>
          <Text> </Text>
          <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
            <Image source={require('./assets/junina.png')} style={css.logo} />
          </TouchableOpacity>
          <Text style={css.text}>Novo participante</Text>
          <View>
            <Text style={css.text}>Nome</Text>
            <TextInput maxLength={20} style={css.campo} onChangeText={setNome} value={nome} />
            <Text style={css.text}>Curso</Text>
            <TextInput maxLength={20} style={css.campo} onChangeText={setCurso} value={curso} />
            <Text style={css.text}>Categoria</Text>
            <RadioGroup
              radioButtons={categorias}
              onPress={handleCategoriaChange}
              layout="row"
            />
            <View style={css.viewbotoes}>
              <Button title="Limpar" color="orange" onPress={limpar} />
              <Button title="Cadastrar" color="orange" onPress={cadastrar} />
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
