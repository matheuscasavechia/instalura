import 'react-native-gesture-handler';
import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
  StatusBar,
  Platform,
} from 'react-native';

import { Cabecalho } from '../../Components/Cabecalho';
import { Foto } from '../../Components/Foto';
import { Comentarios } from '../../Components/Comentarios';
import readPhotos from '../../api/feed';
import { likePhoto, imgLike } from '../../api/likes';
import adicionarComentario from '../../api/comentario'

const Feed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    readPhotos(setPhotos);
  }, [])

  let altura = 0;

  return (
    <ScrollView style={{ marginTop: altura }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho
              nomeUsuario={item.userName}
              urlImage={item.userURL}
            />
            <Foto
              urlFoto={item.url}
              description={item.description}
              amountLikes={item.likes}
              imgLike={imgLike}
              likePhoto={likePhoto}
            />
            <Comentarios
              comentarios={item.comentarios}
              adicionarComentario={adicionarComentario}
            />
          </Fragment>
        }
      >
      </FlatList>
    </ScrollView>
  )
};
Feed.navigationnOptions = ({ navigation }) => {
  const opcoes = {
    title: navigation.getParam("nome")
  }
  if (Platform.OS == "android") {
    opcoes.header = null
  }
  return opcoes;
}

export default Feed;