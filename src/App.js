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
import { Provider } from 'react-redux';
import { store } from './redux/store';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Pokedex'>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Pokedex" component={LandingPage} />
          <Stack.Screen name="PokemonComponent" component={PokemonComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )

};



export default App;
