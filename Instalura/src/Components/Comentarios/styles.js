import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    inline:{
        flexDirection: 'row',
        alignItems:"center"
    },
    textFlex:{
        flex:1,
    },
    sendIcon: {
        width: 25,
        height: 25,
        marginRight: 10,
        transform: [{ rotate: "-10deg"}],
        marginBottom: 10,
    },
    comments:{
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 12,
    },
    nameUser:{
        fontWeight: "bold",
    }
})

export default styles;