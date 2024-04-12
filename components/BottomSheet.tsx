import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'


const BottomSheet = ({BottomSheetRef, children}: any) => (
  <RBSheet
    ref={BottomSheetRef}
    height={300}
  >
    <View>
      {children}
    </View>
  </RBSheet>
)

export default BottomSheet

const styles = StyleSheet.create({})