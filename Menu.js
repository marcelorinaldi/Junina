import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import css from './estilo/estilo';

function Menu({ navigation }) {
    return (
        <View style={css.footerMenu}>
            <TouchableOpacity onPress={() => navigation.navigate('TelaCadastro')}>
                <Image source={require('./assets/user.png')} style={css.footerMenuItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TelaInsert')}>
                <Image source={require('./assets/add.png')} style={css.footerMenuItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TelaPagamento')}>
                <Image source={require('./assets/payment.png')} style={css.footerMenuItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TelaPagas')}>
                <Image source={require('./assets/pagas.png')} style={css.footerMenuItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TelaDelete')}>
                <Image source={require('./assets/del.png')} style={css.footerMenuItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TelaBusca')}>
                <Image source={require('./assets/search.png')} style={css.footerMenuItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
                <Image source={require('./assets/sair.png')} style={css.footerMenuItem}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default Menu;
