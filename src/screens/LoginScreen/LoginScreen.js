import React from 'react';

import {View, Text, ImageBackground, TextInput} from 'react-native'
import styles from './styles';

const LoginScreen = () => {
    return(
        
            <ImageBackground style={{flex: 1}} source={require('../../../assets/images/doctor.png')}>

                <View>
                    <Text>Welcome Back.</Text>
                </View>
            </ImageBackground>
            
      
    )
}

export default LoginScreen;