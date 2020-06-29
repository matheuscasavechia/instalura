import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from './styles.js'

const Foto = ({ 
    urlFoto, 
    description, 
    amountLikes, 
    likePhoto, 
    imgLike }) => {

    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(amountLikes);
    
    const clickLike = () => {3
        const [newStateCurtiu, qnt] = likePhoto(curtiu, likes)
        setLikes(qnt);
        setCurtiu(newStateCurtiu);
    }

    return (
        <Fragment>
            <Image
                source={{ uri: urlFoto }}
                style={styles.image}
            />
            <Text> {description} </Text>
            <View style={styles.viewLike}>
                <TouchableOpacity onPress={clickLike}>
                    <Image
                        source={imgLike(curtiu)}
                        style={styles.like}
                    />
                </TouchableOpacity>
                <Text> curtidas {likes}</Text>
            </View>
        </Fragment>
    )
};

export default Foto;
