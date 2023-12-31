import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import {View, Text, TouchableOpacity} from 'react-native';
import HeaderlessScreen from './screens/HeaderlessScreen';

const stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        /> 
        <stack.Screen
          name='Detail'
          component={DetailScreen}
          options={{
            headerBackVisible: false,
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
        <stack.Screen
          name='Headerless'
          component={HeaderlessScreen}
          options={{
            headerShown: false,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
