import { StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container:{
        //backgroundColor:"#ff007f",
        flexGrow:2,
        justifyContent: 'center',
        alignItems:'center',
    },
    inputs:{
       //color: 'white',
       fontSize: 30,
       textAlign:'center',
       width: largura*0.8,
       marginTop: 20,

    },
    loginButton:{
        alignItems:'center',
        marginBottom: 50
    }
})

export default styles;