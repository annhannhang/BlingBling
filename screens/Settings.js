import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/Color'
import { ICONS } from '../constants/Icons'

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.headerContainer}>
            <TouchableOpacity
                onPress={() => navigation.pop()}
                style = {styles.backButton}
            >
                <Image source={ICONS.back} style = {styles.backIcon}/>
            </TouchableOpacity>

            <Text style = {styles.headerText}>Settings</Text>
        </View>

        <View style = {styles.menu}>
            <TouchableOpacity style = {styles.item}>
                <Image source={ICONS.box} style = {styles.iconItem}/>
                <Text style = {styles.itemText}>Delivery</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.item}>
                <Image source={ICONS.view} style = {styles.iconItem}/>
                <Text style = {styles.itemText}>Display</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.item}>
                <Image source={ICONS.home_unfocus} style = {styles.iconItem}/>
                <Text style = {styles.itemText}>Language</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.item}>
                <Image source={ICONS.bank} style = {styles.iconItem}/>
                <Text style = {styles.itemText}>Payment</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.item}>
                <Image source={ICONS.information} style = {styles.iconItem}/>
                <Text style = {styles.itemText}>About us</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
    menu: {
        width: '100%',
        marginTop: 50,
        marginStart: 20
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginTop: 35
    },
    iconItem: {
        width: 25,
        height: 25,
        tintColor: COLORS.white
    },
    itemText: {
        fontSize: 18,
        marginStart: 20,
        color: COLORS.white,
    },
})