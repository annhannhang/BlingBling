import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../constants/Color';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import {IMAGES} from '../constants/Image';

const Welcome = ({navigation}) => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[COLORS.secondary, COLORS.primary, COLORS.black]}>
      <View>
        <Image source={IMAGES.star1} style={styles.img1} />
        <Image source={IMAGES.star2} style={styles.img2} />
        <Image source={IMAGES.star3} style={styles.img3} />
        <Image source={IMAGES.logo} style={styles.imglogo} />
        <Image source={IMAGES.star4} style={styles.img4} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.headerText}>New way</Text>
        <Text style={styles.headerText}>To clean your PC</Text>

        <View style={{marginVertical: 10}}>
          <Text style={styles.bottomText}>
            New way to interact with your PC
          </Text>
        </View>

        <Button
          title="Explore now!"
          filled
          onPress={() => navigation.navigate('SignUp')}
          style={styles.button}
        />

        <View style={styles.bottom}>
          <Text style={styles.loginHeader}>Already have an account?</Text>
          <Pressable
            onPress={() => navigation.navigate('Login')}
            style={{
              marginLeft: 7,
            }}>
            <Text style={styles.login}>Login</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  img1: {
    width: 200,
    height: 100,
    position: 'absolute',
    top: 10,
    transform: [{translateX: 20}, {translateY: 50}, {rotate: '-16deg'}],
  },
  img2: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -25,
    left: 200,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '-5deg'}],
  },
  img3: {
    width: 200,
    height: 130,
    position: 'absolute',
    top: 140,
    left: -120,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '15deg'}],
  },
  img4: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 560,
    left: 200,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '-5deg'}],
  },
  imglogo: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: 110,
    left: 90,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '-15deg'}],
  },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  bottomText: {
    fontSize: 17,
    color: COLORS.white,
  },
  button: {
    width: '100%',
    height: 60,
    marginTop: 25,
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
  loginHeader: {
    fontSize: 16,
    color: COLORS.white,
  },
  login: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
