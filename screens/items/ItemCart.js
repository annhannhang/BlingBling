import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../constants/Color';


const ItemCart = ({DataCart}) => {
  console.log(DataCart.products[0].name);
  console.log(DataCart.products[0]._id);
  return (
    <View style = {styles.container}>

      <View>
        <Image source={{uri: DataCart.products[0].product_image}} style = {styles.image}/>
      </View>

      <View style = {styles.itemContainer}>
        <Text style = {styles.itemName}>{DataCart.products[0].product_name}</Text>
        <Text style = {styles.itemPrice}>$ {DataCart.products[0].product_price}</Text>
      </View>
      
    </View>
  )
}

export default ItemCart

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightblack,
    margin: 8,
    padding: 10,
    borderRadius: 9
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    borderRadius: 5
  },
  itemContainer: {
    marginStart: 15
  },
  itemName: {
    color: COLORS.white,
    fontSize: 17,
    marginVertical: 5,
    fontWeight: 'bold'
  },
  itemPrice: {
    color: COLORS.white,
    fontSize: 15,
  }
})