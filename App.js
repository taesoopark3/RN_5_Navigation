import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen
          name='Home'
          component={HomeScreen}
        /> 
        <stack.Screen
          name='Detail'
          component={DetailScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
