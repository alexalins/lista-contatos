import React from 'react';
import PeoplePage from './src/pages/PeoplePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Contatos" screenOptions={{
                title: 'Contatos',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#6ca2f7',
                    borderBottomWidth: 1,
                    borderBottomColor: '#C5C5C5',
                },
                headerTitleStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 30,
                    flexGrow: 1,
                    textAlign: 'center'
                }
            }}>
                <Stack.Screen name="Contatos" component={PeoplePage} />
                <Stack.Screen name="Detalhes" component={PeopleDetailPage} options={({ route }) => ({
                    title: route.params.people,
                    headerTitleStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 30,
                    }
                })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;