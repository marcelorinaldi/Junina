import React from 'react';
import { View, Image} from 'react-native';
import css from './estilo/estilo';

function TelaRetorno({ navigation }) {
    setTimeout(() => {
    navigation.navigate('TelaResultado');
  }, 2000);
  
  return (
       <View style={css.container} >
 <Image style={{ width:330,height:280}}
          source={require('./assets/junina.png')} />
    </View>
  );
}
export default TelaRetorno;
