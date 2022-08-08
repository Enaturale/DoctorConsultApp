import React from 'react';

import {View, Text, ImageBackground, StyleSheet, Pressable} from 'react-native';

const sourceImage = "https://pixabay.com/photos/stethoscope-hospital-doctor-health-840125/"

const HomeScreen = () => {
    return(
        <ImageBackground source={sourceImage} style={styles.background}>
            <View>
            <Text>
                Consult from the comfort of your home
            </Text>

            <Pressable>
                <Text>Log In</Text>
            </Pressable>

            <Pressable>
                <Text>Sign Up</Text>
            </Pressable>
            </View>           
        </ImageBackground>
    );
};

const styles=StyleSheet.create({
    background:{
        flex: 1,
    },
    container:{
        
    }

})

export default HomeScreen;