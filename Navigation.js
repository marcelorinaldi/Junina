import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from "./TelaInicial";
import TelaSelect from "./TelaSelect";
import TelaInsert from "./TelaInsert";
import TelaDelete from "./TelaDelete";
import TelaUpdate from "./TelaUpdate";
import TelaRetorno from "./TelaRetorno";
import TelaRetorno2 from "./TelaRetorno2";
import TelaCadastroAluno from "./TelaCadastroAluno";
import TelaCadastroJurado from "./TelaCadastroJurado";
import TelaLogin from "./TelaLogin";
import TelaBusca from "./TelaBusca";
import TelaPagamento from "./TelaPagamento";
import TelaApagar from "./TelaApagar";
import TelaPagas from "./TelaPagas";
import Menu from "./Menu";



const Stack = createStackNavigator();

function Navigation() {
    return (
        < NavigationContainer >
            <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{ headerShown: true }}>
                <Stack.Screen name="TelaLogin" component={TelaLogin} />
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
                <Stack.Screen name="TelaSelect" component={TelaSelect} />
                <Stack.Screen name="TelaInsert" component={TelaInsert} />
                <Stack.Screen name="TelaDelete" component={TelaDelete} />
                <Stack.Screen name="TelaUpdate" component={TelaUpdate} />
                <Stack.Screen name="TelaRetorno" component={TelaRetorno} />
                <Stack.Screen name="TelaRetorno2" component={TelaRetorno2} />
                <Stack.Screen name="TelaCadastroAluno" component={TelaCadastroAluno} />
                <Stack.Screen name="TelaCadastroJurado" component={TelaCadastroJurado} />
                <Stack.Screen name="TelaBusca" component={TelaBusca} />
                <Stack.Screen name="TelaPagamento" component={TelaPagamento} />
                <Stack.Screen name="TelaApagar" component={TelaApagar} />
                <Stack.Screen name="TelaPagas" component={TelaPagas} />
                <Stack.Screen name="Menu" component={Menu} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Navigation;