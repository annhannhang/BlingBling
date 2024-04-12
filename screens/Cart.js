import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../constants/Color'
import { ICONS } from '../constants/Icons'
import Button from '../components/Button'
import { FlatList } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ItemCart from './items/ItemCart'

const Cart = ({navigation}) => {

  const [Data, setData] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const stringCart = await AsyncStorage.getItem('Cart');
      setData(JSON.parse(stringCart));
      console.log(Data);
    }

    getCart()

    return () => {

    }
  }, [])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.black}}>
      <View style={styles.container}>

        <View style = {styles.headerContainer}>
          <Text style = {styles.headerText}>Cart</Text>
          <View style = {styles.header}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Favorite')}
              style = {styles.iconContainer}
            >
              <Image source={ICONS.favorite} style = {styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity 
              style = {styles.iconContainer}
              onPress={() => navigation.navigate('History')}
            >
              <Image source={ICONS.history} style = {styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style = {styles.headerLine}>
          <View style = {styles.line}/>
        </View>

        <FlatList
          data={Data}
          renderItem={({item}) => <ItemCart DataCart = {item}/>}
          keyExtractor={item => item.products[0].product_id}
        />

        <View style = {styles.bottomContainer}>
          <View style = {styles.totalContainer}>
            <Text style = {styles.totalText}>Total</Text>
            <View style = {styles.moneyContainer}>
              <Text style = {styles.dollarText}>đ</Text>
              <Text style = {styles.totalText}>123</Text>
            </View>
          </View>
          <Button
            title="Pay"
            onPress={() => navigation.navigate('Payment')}
            style={styles.payButton}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignSelf: "center",
    paddingHorizontal: 20
  },
  headerContainer: {
    width: '95%',
    height: 62,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 5
  },
  header: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'nothing-font',
    position: 'absolute',
    left: 0,
    fontSize: 25,
    color: COLORS.white,
  },
  iconContainer: {
    width: 50,
    height: 50,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: COLORS.gray
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white
  },
  headerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  line: {
    width: '100%',
    flex: 1,
    height: 1,
    backgroundColor: COLORS.lightgray
  },
  bottomContainer:{
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.gray,
    padding: 10,
    borderRadius: 10
  },
  payButton: {
    width: "50%",
  },
  moneyContainer: {
    flexDirection: 'row',
  },
  totalContainer: {
    width: '50%',
    justifyContent: 'center',
    marginStart: 10
  },
  totalText: {
    color: COLORS.white,
    fontWeight: 'bold'
  },
  dollarText: {
    color: COLORS.primary,
  }
})