import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';
import Menu from './Menu';

function TelaInsert({ navigation }) {
  const [nome, setNome] = useState('');
  const [receitas, setReceitas] = useState('');
  const [despesas, setDespesas] = useState('');
  const [obs, setObs] = useState('');

  const [data_validade, setData_validade] = useState('');
  const [data_validade2, setData_validade2] = useState('');
  const [data_validade3, setData_validade3] = useState('');
  const [descricao, setDescricao] = useState('');

  cadastrar = () => {
    let token = 'Q!W@ee344%%R';
    if (nome.trim() !== '' && receitas.trim() !== '' && despesas.trim() !== '' && data_validade.trim() !== '') {
      alert(nome + '\n cadastrado com sucesso!');

      var data_validadex = "" + data_validade3 + "-" + data_validade2 + "-" + data_validade;
      console.log("dia:" + data_validadex);
      axios.post('http://192.168.56.2/api/insert/', { token, nome, receitas, despesas, data_validadex, obs })
        .then(response => {
          const data = response.data;
          aviso = 0;
        })
        .catch(error => {
          console.log('Erro ao enviar dados:', error);
        });
      navigation.navigate('TelaRetorno');
    } else {
      alert('Preencher Campos!!!');
    }
  }
  limpar = () => {
    setNome('');
    setReceitas('');
    setDespesas('');
    setData_validade('');
    setObs('');
  }
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={css.container}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
            <Image source={require('./assets/orcamento.png')} style={css.logo}></Image>
          </TouchableOpacity>
          <Text style={css.letra}>Novo Orçamento</Text>
          <SafeAreaView style={css.container}>
            <View>
              <Text style={css.letra2}>Nome</Text>
              <TextInput maxLength={20} style={css.campo} onChangeText={(text) => setNome(text)} value={nome}></TextInput>

              <Text style={css.letra2}>Receitas R$</Text>
              <TextInput maxLength={6} style={css.campo} onChangeText={(text) => setReceitas(text)} value={receitas}></TextInput>

              <Text style={css.letra2}>Despesas R$</Text>
              <TextInput maxLength={6} style={css.campo} onChangeText={(text) => setDespesas(text)} value={despesas}></TextInput>
              
              <Text style={css.letra2}>Observações</Text>
              <ScrollView style={css.scrollView}>
                <TextInput maxLength={20} style={css.scroll} onChangeText={(text) => setObs(text)} value={obs}></TextInput>

              </ScrollView>
              <View style={css.principal}>
                <Text style={css.letra2}>Data de validade:</Text>
                <TextInput placeholder="Dia" style={css.campo2} onChangeText={(text) => setData_validade(text)} value={data_validade}></TextInput>
                <Text>/</Text>
                <TextInput placeholder="Mês" style={css.campo2} onChangeText={(text) => setData_validade2(text)} value={data_validade2}></TextInput>
                <Text>/</Text>
                <TextInput placeholder="Ano" style={css.campo2} onChangeText={(text) => setData_validade3(text)} value={data_validade3}></TextInput>
              </View>
              <View style={css.viewbotoes}>
                <View><Button title="Limpar" color='green' onPress={limpar} /></View>
                <View><Button title="Adicionar" color='green' onPress={cadastrar} /></View>
              </View>
            </View>
          </SafeAreaView>
          <Text> </Text>
          <Menu navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default TelaInsert;
