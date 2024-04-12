import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/Color'

const button = (props) => {
    const filledBGColor = COLORS.black || COLORS.black;
    const outlinedColor = COLORS.primary;
    const bgColor = props.filled ? filledBGColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.black;
  return (
    <TouchableOpacity
        style={{
            ...styles.button,
            ...{backgroundColor: bgColor},
            ...props.style
        }}
        onPress={props.onPress}
    >
        <Text style={{fontFamily: 'nothing-font', fontSize: 17, ...{color: textColor}}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default button

const styles = StyleSheet.create({
    button: {
        paddingBottom: 15,
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})