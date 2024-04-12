import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/Color'
import { ICONS } from '../constants/Icons'

const Favorite = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.headerContainer}>
            <TouchableOpacity
                onPress={() => navigation.pop()}
                style = {styles.backButton}
            >
                <Image source={ICONS.back} style = {styles.backIcon}/>
            </TouchableOpacity>

            <Text style = {styles.headerText}>Your favorite</Text>
        </View>
    </SafeAreaView>
  )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: COLORS.black,
        alignItems: 'center'
    },
    headerContainer: {
        width: '100%'
    },
    backButton: {
        width: 50,
        height: 50,
        marginStart: 5,
        marginTop: 15,
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
        fontFamily: 'nothing-font',
        fontSize: 25,
        marginStart: 5,
        marginTop: 20,
        color: COLORS.white,
    },
})