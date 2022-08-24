import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: 700,
        backgroundColor:"#969696",
        // opacity: 0.6,
        marginTop: 190,
        borderRadius: 20,
        alignContent:'center'
        

    },
    miniContainer:{
        marginVertical: 20,
        marginHorizontal: 20,

    },
    title:{
        fontSize: 30,
        fontFamily: "Nunito-Bold",
        color:'black',
        marginVertical: 2,
        marginTop: 20,
        alignSelf:'center'
    },
    subs:{
        alignSelf:'center',
        fontSize: 16,
        color:'black',
    },
    textInput:{
        borderWidth: 1,
        borderColor: 'black'
    }

})

export default styles;