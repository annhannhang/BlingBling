import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import COLORS from '../constants/Color';
import BottomTabNavigation from './BottomTabNavigation';
import PC_clean from '../screens/PC_clean';
import Tools from '../screens/Tools';
import {ICONS} from '../constants/Icons';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 300,
          backgroundColor: COLORS.black,
        },
        drawerLabelStyle: {
          color: COLORS.white,
          fontSize: 14,
          marginLeft: -10,
        },
        drawerActiveTintColor: COLORS.secondary,
      }}>
      <Drawer.Screen
        name="DrawerHome"
        options={{
          drawerLabel: 'Home',
          headerShadowVisible: false,
          drawerIcon: () => {
            return <Image source={ICONS.home_focus} style={styles.icon} />;
          },
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name="PC_Clean"
        options={{
          drawerLabel: 'PC Clean',
          headerShadowVisible: false,
          drawerIcon: () => {
            return <Image source={ICONS.clean} style={styles.icon} />;
          },
        }}
        component={PC_clean}
      />
      <Drawer.Screen
        name="Tools"
        options={{
          drawerLabel: 'Tools',
          headerShadowVisible: false,
          drawerIcon: () => {
            return <Image source={ICONS.wrench} style={styles.icon} />;
          },
        }}
        component={Tools}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
    width: 15,
    height: 15,
    tintColor: COLORS.white,
  },
});
