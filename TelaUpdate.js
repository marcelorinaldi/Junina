import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View, Button, TextInput, Alert, Image, SafeAreaView, ScrollView } from 'react-native';
import css from './estilo/estilo';
import axios, { toFormData } from 'axios';
import Menu from './Menu';


function TelaEditar2({ navigation, route }) {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  let token = 'Q!W@ee344%%R2';

  const [nome2, setNome] = useState('');
  const [receitas2, setReceitas] = useState('');
  const [despesas2, setDespesas] = useState('');
  const [obs2, setObs] = useState('');
  const [data_val2, setData_val] = useState('');

  const [data_validade, setData_validade] = useState('');
  const [data_validade2, setData_validade2] = useState('');
  const [data_validade3, setData_validade3] = useState('');

  if (route.params && Object.keys(route.params).length > 0) {
    var { id, nome } = route.params;
  } else {
    var id = 21;
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  // carrega os dados 
  const fetchProduct = () => {
    //axios.get(`https://api.semlimite.app.br/select_um/?token=${token}&id=${id}`)
    axios.get(`http://192.168.56.2/api/select_um/?token=${token}&id=${id}`)
      .then(response => {
        setUsers2(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  cadastrar = () => {
    let token = 'Q!W@ee344%%R';
    if (nome2.trim() !== '' && receitas2.trim() !== '' && despesas2.trim() !== '') {
      var data_validadex = "" + data_validade3 + "-" + data_validade2 + "-" + data_validade;
      console.log("dia:" + data_validadex);
      // axios.post('https://api.semlimite.app.br/update/', { token, a: id, nome2, valor2, imagem2, quantidade2 })
      axios.post('http://192.168.56.2/api/update/', { token, a: id, nome2, receitas2, despesas2, data_validadex, obs2 })
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

  limpar = () => {
    setNome('');
    setReceitas('');
    setDespesas('');
    setData_validade('');
    setObs('');
  }

  useEffect(() => {
    // Função para extrair e formatar os dados quando o componente for montado
    const extrairDados = () => {
      if (users2 && users2.length > 0) {
        const primeiroItem = users2[0]; // Vamos extrair dados apenas do primeiro item por enquanto
        const { nome, receitas, despesas, obs } = primeiroItem;

        // Agora você pode fazer o que quiser com esses dados formatados
        // Por exemplo, você pode armazená-los no estado para usar na renderização
        //setDadosFormatados({nome });
        setNome(nome);
        setReceitas(receitas);
        setDespesas(despesas);
        setObs(obs);
      }
    };
    extrairDados();

    // Retornar uma função de limpeza se necessário
    return () => {
      // Alguma limpeza se necessário
    };
  }, [users2]);


  console.log('1_ ' + nome2);
  console.log('2_ ' + receitas2);
  console.log('3_ ' + despesas2);
  console.log('4_ ' + obs2);


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={css.container}>
          <Text> </Text>
          <Text> </Text>
          <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
            <Image source={require('./assets/orcamento.png')} style={css.logo}></Image>
          </TouchableOpacity>
          <Text></Text>
          <Text style={css.text}>Editar Orçamento</Text>
          <View>
            <Text style={css.letra2}>Orçamento</Text>
            <TextInput placeholder="Orçamento" maxLength={20} style={css.campo} onChangeText={(text) => setNome(text)} value={nome2}></TextInput>
            <Text style={css.letra2}>Receitas R$</Text>
            <TextInput placeholder="0.00" maxLength={6} style={css.campo} onChangeText={(text) => setReceitas(text)} value={receitas2}></TextInput>
            <Text style={css.letra2}>Despesas R$</Text>
            <TextInput placeholder="0.00" maxLength={6} style={css.campo} onChangeText={(text) => setDespesas(text)} value={despesas2}></TextInput>
            <Text style={css.letra2}>Observações</Text>
            <TextInput placeholder="Obs:" maxLength={45} style={css.campo} onChangeText={(text) => setObs(text)} value={obs2}></TextInput>
            <View style={css.principal}>
              <Text style={css.letra2}>Data de validade:</Text>
              <TextInput placeholder="Dia" maxLength={2} style={css.campo2} onChangeText={(text) => setData_validade(text)} value={data_validade}></TextInput>
              <Text>/</Text>
              <TextInput placeholder="Mês" maxLength={2} style={css.campo2} onChangeText={(text) => setData_validade2(text)} value={data_validade2}></TextInput>
              <Text>/</Text>
              <TextInput placeholder="Ano" maxLength={4} style={css.campo2} onChangeText={(text) => setData_validade3(text)} value={data_validade3}></TextInput>
            </View>
            <View style={css.viewbotoes}>
              <View><Button title="Limpar" color='green' onPress={limpar} /></View>
              <Text> </Text>
              <View><Button title="Atualizar" color='green' onPress={cadastrar} /></View>
            </View>
          </View>
          <Text> </Text>
          <Menu navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default TelaEditar2;