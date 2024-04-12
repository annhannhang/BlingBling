import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../constants/Color'
import Header from '../components/Header'
import Button from '../components/Button'



const Tools = ({navigation}) => {
  const [Tool, setTool] = useState([]);
  useEffect(() => {
    const dataTools = require('../data/Tool.json');
    setTool(dataTools.items)
  }, []);
  
  return (
    <ScrollView style={{flex: 1, backgroundColor:COLORS.black}}>
      <View style={styles.container}>
        <Header/>

        <Text style = {styles.headerText}>Tools</Text>

        <FlatList
          data={Tool}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.pcCleanItemContainer}
              onPress={() => navigation.navigate('Details', {item: item})}
            >
              <View style = {styles.pcCleanItem}>
                <Image source={{uri: item.image}} style={{width: 150, height: 150, borderRadius: 10}}/>
                <View style = {styles.textContainer}>
                  <Text style = {styles.pcCleanItemText}>{item.name}</Text>
                  <Text style = {styles.pcCleanItemPrice}>{item.price}</Text>
                  <Button
                      title="Add to cart"
                      style={styles.cartButton}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

      </View>
    </ScrollView>
  )
}

export default Tools

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignSelf: "center",
    paddingHorizontal: 20
  },
  headerText: {
    color: COLORS.white,
    fontSize: 30,
    fontFamily: 'nothing-font',
    marginVertical: 50,
    textAlign: 'center'
  },
  pcCleanItemContainer: {
    marginRight: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  pcCleanItem: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    flexDirection: 'row'
  },
  pcCleanItemText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginStart: 5,
    marginTop: 10
  },
  pcCleanItemPrice: {
    color: COLORS.white,
    fontSize: 14,
    marginStart: 5,
    marginTop: 5
  },
  textContainer: {
    marginStart: 15
  },
  cartButton: {
    width: 150,
    marginVertical: 10,
  },
})