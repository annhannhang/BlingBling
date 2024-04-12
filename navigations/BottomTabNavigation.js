import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { Cart, Home } from '../screens/Index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import COLORS from '../constants/Color';
import { ICONS } from '../constants/Icons';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarActiveTintColor: COLORS.primary,
  tabBarLabelStyle: {flexDirection: 'row'},
  tabBarStyle: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    elevation: 0,
    height: 60,
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.lightblack,
    backgroundColor: COLORS.lightblack
  }
}

const BottomTabNavigation = () => {
  const renderLabel = (props) =>
    props.focused ? (
      <Text style={[styles.labelStyle, {color: props.color}]}>
        {props.children}
      </Text>
    ) : null;

  const renderIcon = (
    icon,
    props,
  ) => (
    <Image
      source={icon}
      tintColor={props.color}
      style={styles.icon}
    />
  );
  return (
    <Tab.Navigator 
      screenOptions={screenOptions}
      
    >
        <Tab.Screen
          name='TabHome'
          component={Home}
          options={{
            tabBarIcon: props => renderIcon(ICONS.home_unfocus, props),
            tabBarLabel: props => renderLabel(props),
          }}
        />

        <Tab.Screen
          name='Cart'
          component={Cart}
          options={{
            tabBarIcon: props => renderIcon(ICONS.cart_unfocus, props),
            tabBarLabel: props => renderLabel(props),
          }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  }
})