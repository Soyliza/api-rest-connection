import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemsScreen';
import DetailScreen from './screens/DetailScreen';
import AddItemScreen from './screens/AddItemScreen';

const Stack = createNativeStackNavigator();
const initialItems=[
  {
    id: '1',
    title: 'task 1',
    description: 'Crear app con expo'
  },
  {
    id: '2',
    title: 'task 2',
    description: 'Arrancar app con expor start'
  }
]

export default function App() {
  const [items,setItems]= useState(initialItems);
  function addItem(item){
    setItems([
      ...items,
      {
      id: Date.now.toString(),
      title: item.title,
    description: item.description
  },
    ]);
  }

  return (
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="Home"
          component={HomeScreen}
          options={{title:'Inicio'}} />

           <Stack.Screen name="Items" 
           options={{title:'Listado'}} 
           component={ItemScreen} />
             
            

           <Stack.Screen name="Detail"
          component={DetailScreen}
          options={{title:'Detalle'}} />

          <Stack.Screen name='AddItem' options={{title:'Nuevo Elemento'}}>
            {(props) => <AddItemScreen {...props} onAddItem={addItem}/> }
          </Stack.Screen>

         

        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});