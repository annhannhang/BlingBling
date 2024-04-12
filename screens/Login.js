import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constants/Color';
import Button from '../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ICONS} from '../constants/Icons';
import {IMAGES} from '../constants/Image';
import axios, { Axios } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(true);

  const handleLogin = async () => {
    await axios.post("https://cro101-b166e76cc76a.herokuapp.com/users/login",{
      email: Email,
      password: Password
    })
    .then (function (response) {
      if (response.data.status == true) {
        const email = response.data.user.email;
        AsyncStorage.setItem('email', email);
        const cart = JSON.stringify(response.data.user.carts);
        AsyncStorage.setItem("Cart", cart);
        navigation.navigate("Home");
      }
    })
    .catch (function (error) {
      ToastAndroid.show("Login error", ToastAndroid.SHORT);
    }) 
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      <View>
        <Image source={IMAGES.logo} style={styles.img} />
      </View>

      <View style={styles.container}>
        <Image source={ICONS.logoAppText} style={styles.logoImg} />

        <View style={{marginBottom: 12}}>
          <Text style={styles.inputLabel}>Email</Text>

          <View style={styles.inputText}>
            <TextInput
              placeholder="What is your email?"
              placeholderTextColor={COLORS.lightgray}
              onChangeText={(item) => setEmail(item)}
              style={{width: '100%', color: COLORS.white}}
            />
          </View>
        </View>

        <View style={{marginBottom: 12}}>
          <Text style={styles.inputLabel}>Password</Text>

          <View style={styles.inputText}>
            <TextInput
              placeholder="Type your password.."
              placeholderTextColor={COLORS.lightgray}
              secureTextEntry={passwordShown}
              onChangeText={(item) => setPassword(item)}
              style={{width: '100%', color: COLORS.white}}
            />

            <TouchableOpacity
              onPress={() => setPasswordShown(!passwordShown)}
              style={{
                position: 'absolute',
                right: 15,
              }}>
              {passwordShown == false ? (
                <Image source={ICONS.eyehidden} style={styles.eyeButton} />
              ) : (
                <Image source={ICONS.view} style={styles.eyeButton} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Button
          onPress={() => handleLogin()}
          title="Login"
          style={styles.loginButton}
        />

        <View style={styles.otherLoginTextContainer}>
          <View style={styles.line} />
          <Text style={styles.otherLoginText}>Or login with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.otherLoginContainer}>
          <TouchableOpacity
            style={[
              styles.otherLoginButton,
              {backgroundColor: COLORS.lightblue},
            ]}>
            <Image
              source={ICONS.facebook}
              style={styles.logoIcons}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.otherLoginButton, {backgroundColor: COLORS.white}]}>
            <Image
              source={ICONS.google}
              style={styles.logoIcons}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  img: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 570,
    left: 200,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '-5deg'}],
  },
  logoImg: {
    width: 166,
    height: 52,
    marginVertical: 30,
    alignSelf: 'center',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 18,
    color: COLORS.white,
  },
  inputText: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.lightgray,
  },
  eyeButton: {
    width: 20,
    height: 20,
  },
  loginButton: {
    width: '100%',
    height: 55,
    marginTop: 30,
    marginBottom: 4,
  },
  otherLoginTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 1,
    marginHorizontal: 10,
    backgroundColor: COLORS.lightgray,
  },
  otherLoginText: {
    fontSize: 14,
    color: COLORS.lightgray,
  },
  otherLoginContainer: {
    width: 145,
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otherLoginButton: {
    width: 50,
    height: 50,
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 100,
  },
  logoIcons: {
    width: 30,
    height: 30,
  },
  buttonText: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
});
