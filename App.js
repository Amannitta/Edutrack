import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import AddSubjectScreen from './components/AddSubjectScreen';
import SubjectDetailsScreen from './components/SubjectDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddSubject" component={AddSubjectScreen} />
        <Stack.Screen name="SubjectDetails" component={SubjectDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
