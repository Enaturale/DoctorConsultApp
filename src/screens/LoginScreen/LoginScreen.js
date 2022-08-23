import React, { useState } from 'react';

import { View, Text, ImageBackground, TextInput, } from 'react-native'
import styles from './styles';

const LoginScreen = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{ backgroundColor: '#CFD8DC', flex: 1, opacity: 0.8, }}>
            {/* <ImageBackground
                style={{ flex: 1 }}
                source={require('../../../assets/images/firstaid.png')}
                resizeMode="contain"
            > */}

                <View style={styles.container}>
                    <Text style={styles.title}>Welcome Back.</Text>
                    <Text style={styles.subs}>Log in to your account.</Text>
                    <View>
                        <TextInput
                            placeholder='Email'
                        />
                        <TextInput
                            placeholder='Password'

                        />

                        <View>
                            <View>

                                <Text>Remember Me</Text>
                            </View>

                            <Text>Forgot Password?</Text>
                        </View>
                    </View>
                </View>


            {/* </ImageBackground> */}
        </View>


    )
}

export default LoginScreen;