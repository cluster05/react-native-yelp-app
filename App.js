import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SearchScreen } from './src/pages/SearchScreen';
import { ResultsShowScreen } from './src/pages/ResultsShowScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Business Search' }}
        />
        <Stack.Screen
          name="Result"
          component={ResultsShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;