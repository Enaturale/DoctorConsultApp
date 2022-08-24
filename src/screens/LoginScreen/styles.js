import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    checkBox:{
        marginHorizontal: 20,
        marginVertical: 20,
        opacity: 0.5,
    },
    container:{
        height: 700,
        backgroundColor:"white",
        // opacity: 0.6,
        marginTop: 100,
        borderRadius: 40,
        alignContent:'center'
        

    },
    miniContainer:{
        marginVertical: 20,
        marginHorizontal: 20,

    },
    title:{
        fontSize: 30,
        fontFamily: "Nunito-ExtraBold",
        color:'black',
        marginVertical: 2,
        marginTop: 20,
        alignSelf:'center'
    },
    subs:{
        alignSelf:'center',
        fontSize: 16,
        color:'black',
        fontFamily: "Nunito-BoldItalic",

    },
    textInput:{
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 30,
        borderRadius: 10,
        fontSize: 20,
        fontFamily: "Nunito-Italic",

    },
    buttonContainer:{
        marginVertical: 30,
        alignItems: 'center',
        justifyContent:'center',

    },
    loginBtn:{
        borderWidth: 1,
        borderColor:'#0E3A6B',
        backgroundColor: '#0E3A6B',
        height: 47,
        width: 300,
        alignItems:'center',
        justifyContent:'center',
        borderTopEndRadius: 18,
        borderBottomEndRadius: 18,
        borderBottomLeftRadius: 18,
        marginVertical: 10,
    },
    registerBtn:{
        borderWidth: 2,
        borderColor:'#0E3A6B',
        // backgroundColor: '#0E3A6B',
        height: 47,
        width: 300,
        alignItems:'center',
        justifyContent:'center',
        // borderTopEndRadius: 15,
        borderTopLeftRadius: 18,
        borderBottomEndRadius: 18,
        borderBottomLeftRadius: 18,
        marginVertical: 10,
    }

})

export default styles;