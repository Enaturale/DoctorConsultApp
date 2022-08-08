import React from 'react';

import {View, Text} from 'react-native'
import HomeScreen from './src/screens/Homescreen/HomeScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Homescreen' component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name='Loginscreen' component={LoginScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;