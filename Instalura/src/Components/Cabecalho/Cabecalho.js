import React, { Fragment } from 'react';
import {
    Text,
    Image, 
    View,
} from 'react-native';
import styles from './style.js';

const Cabecalho = ({ nomeUsuario, urlImage }) => {
    return (
        <View style={styles.cabecalho}>
            <Image 
            source={{ uri: urlImage }}
            style={styles.fotoUsuario}
            />
            <Text> {nomeUsuario} </Text>
        </View>
    );
}

export default Cabecalho;