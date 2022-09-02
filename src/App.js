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
import LandingPage from "./pages/productList/LandingPage"
import PokemonComponent from './pages/productDescription/PokemonComp';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CounterPage from './CounterUseReducer/CounterPage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='CounterPage'>
          <Stack.Screen name="CounterPage" component={CounterPage}></Stack.Screen>
          <Stack.Screen name="Home" component={HomePage} options={{ header: () => null }} />
          <Stack.Screen name="Pokedex" component={LandingPage} options={{ header: () => { "" } }} />
          <Stack.Screen name="PokemonComponent" component={PokemonComponent} options={{
            headerStyle: {
              backgroundColor: '#000',
            }, headerTintColor: '#fff',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )

};



export default App;
