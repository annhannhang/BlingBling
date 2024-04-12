import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/Color'
import { ICONS } from '../constants/Icons'
import { IMAGES } from '../constants/Image'

const Payment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style = {styles.headerContainer}>
            <TouchableOpacity
                onPress={() => navigation.pop()}
                style = {styles.backButton}
            >
                <Image source={ICONS.back} style = {styles.backIcon}/>
            </TouchableOpacity>

            <Text style = {styles.headerText}>Payment</Text>
        </View>

        <View style = {styles.cardContainer}>
            <Image source={IMAGES.vcb} style = {styles.card} resizeMode='contain'/>
        </View>

        <TouchableOpacity
            style = {styles.methodPaymentMomo}
        >
            <Image source={IMAGES.momo} style = {styles.methodIcon}/>
            <Text style = {styles.methodText}>Momo e-wallet payment</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style = {styles.methodPaymentZalo}
        >
            <Image source={IMAGES.zalo} style = {styles.methodIcon}/>
            <Text style = {styles.methodText}>ZaloPay e-wallet payment</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style = {styles.methodPayment}
        >
            <Image source={ICONS.bank} style = {styles.methodIconBank}/>
            <Text style = {styles.methodText}>Pay via bank transfer</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Payment

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
    cardContainer: {
        width: 380,
        height: 255,
        borderRadius: 20,
        borderColor: COLORS.primary,
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    card: {
        width: 380,
        height: 220
    },
    methodPayment: {
        width: 380,
        height: 60,
        backgroundColor: COLORS.lightblack,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    methodIcon: {
        position: 'absolute',
        left: 20,
        top: 18,
        width: 25,
        height: 25,
    },
    methodIconBank: {
        position: 'absolute',
        left: 20,
        top: 18,
        width: 25,
        height: 25,
        tintColor: COLORS.white
    },
    methodPaymentMomo: {
        width: 380,
        height: 60,
        backgroundColor: COLORS.pink,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    methodPaymentZalo: {
        width: 380,
        height: 60,
        backgroundColor: COLORS.lightzalo,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    methodText: {
        color: COLORS.white
    }
})