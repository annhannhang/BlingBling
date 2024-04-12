import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../constants/Color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ItemProductHome = ({dataProduct}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', {idProduct: dataProduct._id})}
            style = {styles.ItemContainer}
        >
            <View style = {styles.Item}>
                <Image source={{ uri: dataProduct.image }} style={styles.ItemImage} />
                <Text style={styles.ItemText}>{dataProduct.name}</Text>
                <Text style={styles.ItemPrice}>{dataProduct.price}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

export default ItemProductHome

const styles = StyleSheet.create({
    ItemContainer: {
        marginRight: 10,
        borderRadius: 10,
        marginTop: 25,
    },
    Item: {
        width: 180,
        height: 230,
        borderRadius: 10,
    },
    ItemImage: {
        width: 180,
        height: 180,
        borderRadius: 10
    },
    ItemText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: 'bold',
        marginStart: 5,
        marginTop: 10
    },
    ItemPrice: {
        color: COLORS.white,
        fontSize: 14,
        marginStart: 5,
        marginTop: 5
    },
    
})