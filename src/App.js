/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import LandingPage from "./pages/LandingPage"
import PokemonComponent from './pages/PokemonComp';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PokemonComponent'>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Pokedex" component={LandingPage} />
        <Stack.Screen name="PokemonComponent" component={PokemonComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  )

};



export default App;
