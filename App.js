import React from 'react';
import PeoplePage from './src/pages/PeoplePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Contatos" screenOptions={{
                headerStyle: {
                    backgroundColor: '#6ca2f7',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24
                },
            }}>
                <Stack.Screen name="Contatos" component={PeoplePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;