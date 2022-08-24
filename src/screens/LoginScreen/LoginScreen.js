import React, { useState } from 'react';

import { View, Text, ImageBackground, TextInput, Pressable} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

import Icons from "react-native-vector-icons/MaterialCommunityIcons"

const LoginScreen = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={{ backgroundColor: '#CFD8DC', flex: 1, opacity: 0.8, }}>
            {/* <ImageBackground
                style={{ flex: 1 }}
                source={require('../../../assets/images/firstaid.png')}
                resizeMode="contain"
            > */}

            <Icons name="chevron-left-circle" color={white} size="20" />

            <View style={styles.container}>
                {/* Title and description */}
                <Text style={styles.title}>Welcome Back.</Text>
                <Text style={styles.subs}>Log in to your account.</Text>
                
                {/* Text inputs for email and password. Forgot password and rememeber me checkboc */}
                <View style={styles.miniContainer}>
                    <TextInput
                        placeholder='Email'
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.textInput}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{flexDirection:'row'}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                
                            />
                            <Text>Remember Me</Text>
                        </View>

                        <Text>Forgot Password?</Text>
                    </View>

                    {/* Login and Sign up buttons section */}
                    <View>
                        <Pressable>
                            <Text>Login</Text>
                        </Pressable>

                        <Pressable>
                            <Text>Register</Text>
                        </Pressable>
                    </View>
                </View>
            </View>


            {/* </ImageBackground> */}
        </View>


    )
}

export default LoginScreen;