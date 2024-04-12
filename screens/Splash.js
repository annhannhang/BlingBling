import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from "lottie-react-native";
import { ICONS } from '../constants/Icons';

const Splash = ({navigation}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.navigate('Welcome');
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
  return (
    <View style= {styles.container}>
      <Image source={ICONS.logoAppTextBlack} style = {styles.imgLogo}/>

      <LottieView
        source={require("../assets/loading.json")}
        style={{width: 100, height: 100}}
        autoPlay
        loop
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgLogo: {
    width: 166,
    height: 52
  }
})