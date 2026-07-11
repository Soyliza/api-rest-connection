import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemsScreen';
import DetailScreen from './screens/DetailScreen';
import AddItemScreen from './screens/AddItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Inicio" }}
        />

        <Stack.Screen
          name="Items"
          component={ItemScreen}
          options={{ title: "Listado" }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Detalle" }}
        />

        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
          options={{ title: "Nuevo Elemento" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}