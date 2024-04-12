
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/Color';
import Button from '../components/Button';
import {ICONS} from '../constants/Icons';
import {IMAGES} from '../constants/Image';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignUp = ({navigation}) => {
  
  const [passwordShown, setPasswordShown] = useState(true);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");

  const handleSignUp = async () => {
    if (Email.length >= 10 || Password.length >= 8 || Name.length >= 1) {
      await axios.post('https://cro101-b166e76cc76a.herokuapp.com/users/register', {
        email: Email,
        password: Password,
        name: Name
      })
      .then(function(response){
        if (response != null) {
          if(response.data.status == true) {
            navigation.navigate("Login");
            ToastAndroid.show("success", ToastAndroid.SHORT);
          } else {
            ToastAndroid.show("fail", ToastAndroid.SHORT);
          }
        }
      })
      .catch(function(error){
        ToastAndroid.show("sign up fail", ToastAndroid.SHORT);
      });
    } else {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.SHORT);
    }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      <View>
        <Image source={IMAGES.logo} style={styles.img} />
      </View>

      <View style={styles.container}>
        <Image source={ICONS.logoAppText} style={styles.logoImg} />

        <Text style={styles.headerText}>Create Account</Text>
        <Text style={styles.subheaderText}>With BlingBling account</Text>

        <View style={{marginBottom: 12}}>
          <Text style={styles.inputLabel}>Email</Text>

          <View style={styles.inputText}>
            <TextInput
              placeholder="Type ur email.."
              onChangeText={(item) => setEmail(item)}
              placeholderTextColor={COLORS.lightgray}
              keyboardType="default"
              style={{width: '100%', color: COLORS.white}}
            />
          </View>
        </View>

        <View style={{marginBottom: 12}}>
          <Text style={styles.inputLabel}>Password</Text>

          <View style={styles.inputText}>
            <TextInput
              placeholder="Type ur password.."
              placeholderTextColor={COLORS.lightgray}
              keyboardType="default"
              onChangeText={(item) => setPassword(item)}
              secureTextEntry={passwordShown}   
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

        <View style={{marginBottom: 12}}>
          <Text style={styles.inputLabel}>Name</Text>

          <View style={styles.inputText}>
            <TextInput
              placeholder="Type ur confirm password.."
              onChangeText={(item) => setName(item)}
              placeholderTextColor={COLORS.lightgray}
              keyboardType="default"
              style={{width: '100%', color: COLORS.white}}
            />
          </View>
        </View>

        <Button 
          title="Sign Up"
          style={styles.signUpButton}
          onPress={() => handleSignUp()}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
    alignSelf: 'center',
    marginVertical: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: COLORS.white,
  },
  subheaderText: {
    fontSize: 16,
    marginBottom: 15,
    color: COLORS.white,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
    color: COLORS.white,
  },
  inputText: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.lightgray,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  eyeButton: {
    width: 20,
    height: 20,
  },
  signUpButton: {
    width: '100%',
    height: 55,
    marginTop: 30,
    marginBottom: 4,
  },
  
});
