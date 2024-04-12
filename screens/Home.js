import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../constants/Color'
import Header from '../components/Header'
import { ICONS } from '../constants/Icons'
import { IMAGES } from '../constants/Image'
import axios from 'axios'
import ItemProductHome from './items/ItemProductHome'

const Home = ({navigation}) => {
  const [PCclean, setPCclean] = useState([]);
  const [Tool, setTool] = useState([])

  useEffect(() => {
    const getPCcleanData = async () => {
      await axios.get("https://cro101-b166e76cc76a.herokuapp.com/products?category=65b07ddcfc13ae4836b4cb08")
      .then(function (response) {
        if (response.data.status == true) {
          setPCclean(response.data.products);
        }
      })
      .catch(function (error) {
        ToastAndroid.show("error", ToastAndroid.SHORT);
      });
    }

    const getToolData = () => {
      axios.get("https://cro101-b166e76cc76a.herokuapp.com/products?category=65b07ddcfc13ae4836b4cb09")
      .then(function (response) {
        if (response.data.status == true) {
          setTool(response.data.products);
        }
      })
      .catch(function (error) {
        ToastAndroid.show("error", ToastAndroid.SHORT);
      });
    }

    getPCcleanData();
    getToolData();
  })
  return (
    <ScrollView style={{ backgroundColor:COLORS.black}}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.inputText}>
            <Image source={ICONS.search} style = {styles.searchIcon}/>
            <TextInput
              placeholder="Search"
              placeholderTextColor={COLORS.lightgray}
              keyboardType="default"
              style={{width: '100%', color: COLORS.white}}
            />
        </View>
        
        <View style = {styles.headerLine}>
          <View style = {styles.line}/>
        </View>

        <View style = {styles.carousel}>
          <Image source={IMAGES.star2} style = {styles.carouselImage}/>
        </View>

        <View style = {styles.pcCleanContainer}>
          <View style = {styles.pcIconContainer}>
            <Image source={ICONS.clean} style = {styles.pcCleanIcon}/>
            <Text style = {styles.headerText}>PC Clean</Text>
          </View>

          <TouchableOpacity
            style = {styles.seeMoreContainer}
          >
            <Text style = {styles.seeMoreText}>see more</Text>
            <Image source={ICONS.right_arrow} style = {styles.seeMoreIcon}/>
          </TouchableOpacity>
        </View>

        <FlatList
          data={PCclean}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ItemProductHome dataProduct={item}/>}
          keyExtractor={item => item._id}
        />

        <View style = {styles.pcCleanContainer}>
          <View style = {styles.pcIconContainer}>
            <Image source={ICONS.wrench} style = {styles.pcCleanIcon}/>
            <Text style = {styles.headerText}>Tools</Text>
          </View>

          <TouchableOpacity
            style = {styles.seeMoreContainer}
          >
            <Text style = {styles.seeMoreText}>see more</Text>
            <Image source={ICONS.right_arrow} style = {styles.seeMoreIcon}/>
          </TouchableOpacity>
        </View>

        <FlatList
          data={Tool}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ItemProductHome dataProduct={item}/>}
          keyExtractor={item => item._id}
        />

        <View style = {styles.credit}>
          <Image source={IMAGES.logo} style = {styles.logo}/>
          <Text style = {styles.text}>PS29870 - Phan Trọng Nhân</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    backgroundColor:COLORS.black,
    paddingHorizontal: 20
  },
  inputText: {
    width: '100%',
    height: 50,
    borderColor: COLORS.lightgray,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 50,
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 15,
    tintColor: COLORS.lightgray
  },
  headerLine: {
    alignItems: 'center',
    marginVertical: 15
  },
  line: {
    width: '100%',
    flex: 1,
    height: 1,
    backgroundColor: COLORS.lightgray
  },
  carousel: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.lightgray,
    borderRadius: 10
  },
  carouselImage: {
    width: '100%',
    height: 200,
  },
  pcCleanContainer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  pcIconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pcCleanIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.white
  },
  headerText: {
    color: COLORS.white,
    fontFamily: 'nothing-font',
    fontSize: 17,
    marginStart: 20
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  seeMoreText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 14
  },
  seeMoreIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
    marginStart: 7
  },
  credit: {
    width: '100%',
    height: 200,
    marginTop: 40,
    marginBottom: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10
  },
  text: {
    color: COLORS.white,
    fontSize: 14,
    marginStart: 5,
    marginTop: 5
  }
})