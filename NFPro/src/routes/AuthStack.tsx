import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage';
import Clients from '../screens/Clients'

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Clients" component={Clients} />
            <Stack.Screen name="Login" component={LoginPage}/>
        </Stack.Navigator>
    )
}