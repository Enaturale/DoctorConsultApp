import React from 'react';

import {View, Text, ImageBackground, TextInput} from 'react-native'
import styles from './styles';

const LoginScreen = () => {
    return(
        <View style={{backgroundColor:'white', flex: 1}}>
            <ImageBackground 
                style={{flex: 1}} 
                source={require('../../../assets/images/diag.jpg')} 
                resizeMode="contain"
                >

                 <View style={styles.container}>
                    <Text style={styles.title}>Welcome Back.</Text>
                </View> 
            </ImageBackground>
            </View>
            
      
    )
}

export default LoginScreen;