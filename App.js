import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LogoTitle from './src/components/LogoTitle';
import Home from './src/components/Home';
import HouseItem from './src/components/HouseItem';
import HouseList from './src/components/HouseList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer> 
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#A4C3B2',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerTitle: () => <LogoTitle /> }}
        />
        <Stack.Screen
          name='HouseList'
          component={HouseList}
          options={{
            headerTitle: 'Nos logements',
            headerBackTitle: 'Accueil'
          }}
        />
        <Stack.Screen
          name='HouseItem'
          component={HouseItem}
          options={({route}) => ({title: route.params.item.name, headerBackTitle: 'Retour'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App 