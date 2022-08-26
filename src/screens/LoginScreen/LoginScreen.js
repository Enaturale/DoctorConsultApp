import React, { useEffect, useState } from 'react';

import { View, Text, ImageBackground, TextInput, Pressable } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';


import Icons from "react-native-vector-icons/MaterialCommunityIcons";

//importimng Firebase
import { firebase } from '../../../Config'



const LoginScreen = ({ navigation }) => {
    //toggle for check box
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    //setting a state for the initilization of firebase
    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();




    //to Handle User state changes
    // function onAuthStateChange(user) {
    //     setUser(user);
    //     if (initializing)
    //         setInitializing(false)
    // };
    

    // useEffect(() => {
    //     //to check if the user is logged in or not, 
    //     //if the user is logged, it takes the user to the main screen
    //     const subscriber = firebase.auth().onAuthStateChange(onAuthStateChange);
    //     return subscriber;
    // }, []);

    // if (initializing) return null;

    // if (!user) {
    //     return (
    //         navigation.navigate('Homescreen')

    //     )
    // }

    //navigation back to the homescren
    const gotoMain = () => {
        return navigation.navigate('Homescreen')
    }


    //setting state for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            navigation.navigate('Mainscreen')
        } catch (error) {
            alert(error.message);
        }
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
                <Text style={styles.title}>Welcome Back.</Text>
                <Text style={styles.subs}>Log in to your account.</Text>

                {/* Text inputs for email and password. Forgot password and rememeber me checkboc */}
                <View style={styles.miniContainer}>
                    <TextInput
                        placeholder='Email'
                        style={styles.textInput}
                        onChangeText={(email) => setEmail(email)}
                      
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.textInput}
                        secureTextEntry ={true}
                        onChangeText={(password) => setPassword(password)}
                        
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                            <Text style={{ fontSize: 17, color: 'black', marginTop: 3, }}>Remember Me</Text>
                        </View>

                        <Text style={{ fontSize: 17, color: 'black' }}>Forgot Password?</Text>
                    </View>

                    {/* Login and Sign up buttons section */}
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.loginBtn} onPress={loginUser(email, password)}>
                            <Text
                                style={{
                                    fontSize: 24,
                                    color: 'white',
                                    fontFamily: 'Nunito-ExtraBold'
                                }}
                            >
                                Login
                            </Text>
                        </Pressable>

                        <Pressable style={styles.registerBtn} onPress={navigation.navigate('Signupscreen')}>
                            <Text style={{ fontSize: 24, color: '#0E3A6B', fontFamily: 'Nunito-ExtraBold' }}>Register</Text>
                        </Pressable>
                    </View>
                </View>
            </View>




            {/* </ImageBackground> */}
        </View>


    )
}

export default LoginScreen;