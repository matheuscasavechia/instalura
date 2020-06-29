import { StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    image: {
        width: largura,
        height: largura,
    },
    like: {
        width: 30,
        height: 30,
        margin: 5
    },
    viewLike:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default styles;