import * as React from 'react';
import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './components/pages/main/Main';
import CreateSubmission from './components/pages/createSubmission/CreateSubmission';

class RouterComp extends Component {
    render() {
        const Stack  = createStackNavigator();
        return(
            <NavigationContainer>
                <Stack.Navigator name = "authStack" initialRouteName = "Submissions" >
                    <Stack.Screen name = "Submissions" options = {{headerShown: false}} component = {Main}></Stack.Screen>
                    <Stack.Screen name = "Create Submission" options = {{headerShown: false}} component = {CreateSubmission}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>  
        )
    }
}
export default RouterComp;