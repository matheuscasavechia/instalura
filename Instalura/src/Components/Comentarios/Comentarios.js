import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput,
} from 'react-native';
import styles from './styles.js'
const Comentarios = ({ comentarios, adicionarComentario }) => {

    const [estComentarios, setComentarios] = useState(comentarios);


    const comentar = () => {
        console.warn(conteudoCampoInput);
        campoInput.clear();
        const novoComentario = adicionarComentario(conteudoCampoInput, "Bugan")
            
        setComentarios([...estComentarios, novoComentario]);
    }
    let campoInput;
    let conteudoCampoInput = "";



    return (
        <Fragment>
            <FlatList
                data={estComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={styles.comments}>
                        <Text style={styles.nameUser}>{item.userName}</Text>
                        <Text>: {item.text}</Text>
                    </View>
                }
            />
            <View style={styles.inline}>
                <TextInput
                    ref={textInput => campoInput = textInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                    placeholder={"Deixe seu comentário..."}
                    style={styles.textFlex}
                />
                <TouchableOpacity onPress={comentar}>
                    <Image
                        source={require("../../../res/img/send.png")}
                        style={styles.sendIcon}
                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    )
}

export default Comentarios;