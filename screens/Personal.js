import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/Color'
import { ICONS } from '../constants/Icons'
import Button from '../components/Button'

const Personal = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style = {styles.backButton}
        >
          <Image source={ICONS.back} style = {styles.backIcon}/>
        </TouchableOpacity>
        
        <Text style = {styles.headerText}>Personal Info</Text>
      </View>

      <View style = {styles.headerLine}>
          <View style = {styles.line}></View>
      </View>

      <View style = {styles.body}>
        <View style = {styles.image}></View>
        <View style={{marginBottom: 12}}>
            <Text style={styles.inputLabel}>Fullname</Text>

            <View style={styles.inputText}>
              <TextInput
                placeholder="Type ur username.."
                placeholderTextColor={COLORS.lightgray}
                keyboardType="default"
                style={{width: '100%', color: COLORS.white}}
              />
            </View>
        </View>

        <View style={{marginBottom: 12}}>
            <Text style={styles.inputLabel}>Username</Text>

            <View style={styles.inputText}>
              <TextInput
                placeholder="Type ur username.."
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
                placeholder="Type ur username.."
                placeholderTextColor={COLORS.lightgray}
                keyboardType="default"
                style={{width: '100%', color: COLORS.white}}
              />
            </View>
        </View>

        <Button title="Sign Up" style={styles.saveButton} />
        
      </View>
      
      
    </SafeAreaView>
  )
}

export default Personal

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignSelf: "center",
    paddingHorizontal: 10,
    backgroundColor:COLORS.black
  },
  header: {
    height: 62,
    justifyContent: 'center',
    flexDirection: "row",
    alignItems: 'center',
    margin: 10
  },
  backButton: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightgray,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: 'white'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white
  },
  headerLine: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.lightgray
  },
  body: {
    marginHorizontal: 15
  },
  image: {
    width: 170,
    height: 170,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    margin: 20,
    borderRadius: 20,
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
  saveButton: {
    width: '100%',
    height: 55,
    marginTop: 30,
    marginBottom: 4,
  },
})