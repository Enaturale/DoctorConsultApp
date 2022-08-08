import React from 'react';

import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';



const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>

            <ImageBackground source={require('../../../assets/images/sethso.jpg')} style={styles.background} resizeMode="cover">
                <View style={styles.container}>
                    <View style={{marginHorizontal: 20,}}>
                        <Text style={styles.title}>
                            Consult from the comfort of your home
                        </Text>
                    </View>


                    <Pressable style={styles.loginBtn}>
                        <Text>Log In</Text>
                    </Pressable>

                    <Pressable style={styles.signupBtn}>
                        <Text>Sign Up</Text>
                    </Pressable>
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
        opacity: 0.5,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Nunito-Black',
        color: 'black',
    },
    loginBtn: {
        height: 50,
        width: 150,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,

    },
    signupBtn: {
        height: 50,
        width: 150,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
    }


})

export default HomeScreen;