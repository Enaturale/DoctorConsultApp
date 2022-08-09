import React from 'react';

import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';



const HomeScreen = ({navigation}) => {
    const gotoLogin =() => {
        return(
            navigation.navigate("Loginscreen")
        )
    }

    const gotoSignup = () => {
        return(
            navigation.navigate("Signupscreen")
        )
    }
    return (
        <View style={{ flex: 1 }}>

            <ImageBackground source={require('../../../assets/images/sethso.jpg')} style={styles.background} resizeMode="cover">
                <View style={styles.container}>
                    <View style={{ marginHorizontal: 20, alignItems: 'center', marginVertical: 40, justifyContent:'center', alignContent:'center' }}>
                        <Text style={styles.title} numberOfLines={2}>
                            Consult from the comfort of your home
                        </Text>
                    </View>

                    <View style={{marginVertical: 60, alignItems:'center', justifyContent:'center', alignContent:'center'}}>
                        <Pressable style={styles.loginBtn} onPress={gotoLogin}>
                            <Text style={styles.textBtn}>Log In</Text>
                        </Pressable>
                    </View>

                    <View>
                        <Pressable style={styles.signupBtn}>
                            <Text style={[styles.textBtn, {color:'white'}]}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        marginTop: 130,
        backgroundColor: 'white',
        borderRadius: 15,
        opacity: 0.8,
    },
    title: {
        fontSize: 27,
        fontFamily: 'Segoe UI Bold Italic',
        color: '#0E3A6B',
        textAlign:'center',
    },
    loginBtn: {
        height: 50,
        width: 180,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1.5,
        alignItems:'center',
        justifyContent:'center',

    },
    signupBtn: {
        height: 50,
        width: 180,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0E3A6B',
        borderColor:"#0E3A6B",
       
    },
    textBtn:{
        fontSize: 23,
        fontFamily: "Segoe UI Bold"
    }


})

export default HomeScreen;