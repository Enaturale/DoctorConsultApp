import React, { useState } from 'react';

import { View, Text, ImageBackground, TextInput, Pressable } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import styles from '../LoginScreen/styles';

import Icons from "react-native-vector-icons/MaterialCommunityIcons"

const SignupScreen = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const gotoMain = () => {
        return navigation.navigate('Homescreen')
    }
    return (
        <View style={{ backgroundColor: '#CFD8DC', flex: 1, opacity: 0.8, }}>
            {/* <ImageBackground
                style={{ flex: 1 }}
                source={require('../../../assets/images/firstaid.png')}
                resizeMode="contain"
            > */}


            <Icons name="chevron-left-circle" color="black" size={40} style={styles.checkBox} onPress={gotoMain} />

            <View style={styles.container}>
                {/* Title and description */}
                <Text style={styles.title}>Hey.</Text>
                <Text style={styles.subs}>We need some details from you.</Text>

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

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20, }}>
                        {/* <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}

                />
                <Text style={{ fontSize: 17, color: 'black', marginTop: 3, }}>Remember Me</Text>
            </View> */}
                        <Pressable onPress={gotoMain}>
                            <Text style={{ fontSize: 17, color: 'black' }}>Already have an account?</Text>
                        </Pressable>

                    </View>

                    {/* Login and Sign up buttons section */}
                    <View style={styles.buttonContainer}>
                        {/* <Pressable style={styles.loginBtn}>
                <Text
                    style={{
                        fontSize: 24,
                        color: 'white',
                        fontFamily: 'Nunito-ExtraBold'
                    }}
                >
                    Login
                </Text>
            </Pressable> */}

                        <Pressable style={styles.registerBtn}>
                            <Text style={{ fontSize: 24, color: '#0E3A6B', fontFamily: 'Nunito-ExtraBold' }}>Register</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            {/* </ImageBackground> */}
        </View>


    )
}

export default SignupScreen;