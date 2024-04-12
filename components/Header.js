import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useRef } from 'react';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../constants/Color';
import {ICONS} from '../constants/Icons';
import RBSheet from 'react-native-raw-bottom-sheet';

const Header = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.toggleDrawer()}>
          <Image source={ICONS.menu} style={styles.icon} />
        </TouchableOpacity>

        <Image source={ICONS.logoAppText} style={styles.logoImg} />

        <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => refRBSheet.current.open()}
        >
          <Image source={ICONS.account} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType="slide"
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: COLORS.white,
            width: 100,
          },
          container: {
            height: 220,
            backgroundColor: COLORS.lightblack,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <View style={styles.rbSheetContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
            <View style={styles.rbSheetItem}>
              <Image source={ICONS.information} style={styles.rbSheetImg} />
              <Text style={styles.rbSheetText}>Personal info</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
             onPress={() => navigation.navigate('Settings')}
          >
            <View style={styles.rbSheetItem}>
              <Image source={ICONS.setting} style={styles.rbSheetImg} />
              <Text style={styles.rbSheetText}>Settings</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.rbSheetItem}>
              <Image source={ICONS.logout} style={styles.rbSheetImgLogOut} />
              <Text style={styles.rbSheetTextLogOut}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 5,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: COLORS.gray,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  logoImg: {
    width: 166,
    height: 52,
    alignSelf: 'center',
    marginHorizontal: 55,
  },
  rbSheetContainer: {
    marginHorizontal: 30,
  },
  rbSheetItem:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  rbSheetText: {
    marginLeft: 20,
    color: COLORS.white,
    fontWeight: 'bold'
  },
  rbSheetTextLogOut: {
    marginLeft: 20,
    color: COLORS.red,
    fontWeight: 'bold'
  },
  rbSheetImg: {
    width: 25,
    height: 25,
    tintColor: COLORS.white
  },
  rbSheetImgLogOut: {
    width: 25,
    height: 25,
    tintColor: COLORS.red
  }
});
