import React, { Fragment, useState } from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import styles from './style';
import efetuarLogin from '../../api/login';

const Login = ({ navigation }) => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    const tentarLogar = async () => {
        try {
            const token = await efetuarLogin(usuario, senha);
            await AsyncStorage.setItem("instalura_token", token);
            //Ir para tela de Feed
            navigation.replace("Feed", { nome: usuario });

        } catch (erro) {
            setMensagemErro(erro.message);
        }

    }


    return (
        <Fragment>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Usuario"
                    onChangeText={texto => setUsuario(texto)}
                //placeholderTextColor="white"
                />
                <TextInput
                    placeholder="Senha"
                    secureTextEntry={true}
                    style={styles.inputs}
                    onChangeText={texto => setSenha(texto)}
                //placeholderTextColor="white"
                />
                <Text>{mensagemErro}</Text>
            </View>
            <View style={styles.loginButton}>
                <Button title="Entrar" onPress={tentarLogar} />
            </View>
        </Fragment>
    )
};

Login.navigationnOptions = () => {
    const opcoes = {
        title: "Login"
    }
    if (Platform.OS == "android") {
        opcoes.header = null;
    }
    return opcoes;
}

export default Login;