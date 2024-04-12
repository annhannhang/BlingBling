import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Welcome, SignUp, Login, Splash, Personal, Payment, Favorite, History, Details, Settings} from '../screens/Index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import {AppContextProvider} from '../screens/AppContext';

const Stack = createNativeStackNavigator();

function AppNavigations() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={DrawerNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Personal"
            component={Personal}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Payment'
            component={Payment}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Favorite'
            component={Favorite}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='History'
            component={History}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Details'
            component={Details}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Settings'
            component={Settings}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}

export default AppNavigations;

const styles = StyleSheet.create({});
