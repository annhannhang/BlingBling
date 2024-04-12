import { Image, ImageBackground, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import COLORS from '../constants/Color';
import { ICONS } from '../constants/Icons';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { IMAGES } from '../constants/Image';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Details = ({ route }) => {
    const { idProduct } = route.params;
    const navigation = useNavigation();
    const [DetailProduct, setDetailProduct] = useState([]);
    const [ImgLoaded, setImgLoaded] = useState(false)

    useEffect(() => {
        const getDetail = async () => {
            axios.get("https://cro101-b166e76cc76a.herokuapp.com/products/" + idProduct)
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.status == true) {
                        setDetailProduct(response.data.product);
                    }
                })
                .catch(function (error) {
                    ToastAndroid.show(error, ToastAndroid.SHORT);
                })

        }
        getDetail();

        return () => {

        }
    }, [])

    const AddCart = async () => {
        const email = await AsyncStorage.getItem("email");
        console.log(email);

        const cart = [
            {
                "product_id": DetailProduct._id,
                "product_name": DetailProduct.name,
                "product_price": DetailProduct.price,
                "product_image": DetailProduct.image,
                "product_quantity": 1,
            }
        ]

        await axios.post("https://cro101-b166e76cc76a.herokuapp.com/carts", {
            "email": email,
            "carts": cart
        })
        .then (function (response) {
            if (response.data.status == true) {
                ToastAndroid.show ("Add cart success", ToastAndroid.SHORT);
                navigation.goBack()
            }
        })
        .catch (function (error) {
            ToastAndroid.show( error, ToastAndroid.SHORT);
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' barStyle='dark-content' />

            <ImageBackground
                style={styles.imageContainer}
                source={ImgLoaded ? { uri: DetailProduct.image } : ICONS.loading}
                onLoadEnd={() => setImgLoaded(true)}
            >
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={styles.backButton}
                >
                    <Image source={ICONS.back} style={styles.backIcon} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={styles.loveButton}
                >
                    <Image source={ICONS.favorite} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.itemText}>{DetailProduct.name}</Text>
            </ImageBackground>

            <View style={styles.bodyContainer}>
                <Text style={styles.detailsHeader}>Description</Text>
                <Text style={styles.details}>{DetailProduct.description}</Text>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText} >Price</Text>
                    <View style={styles.moneyContainer}>
                        <Text style={styles.dollarText}>đ </Text>
                        <Text style={styles.totalText}>{DetailProduct.price}</Text>
                    </View>
                </View>
                <Button
                    title="Add to cart"
                    onPress={() => AddCart()}
                    style={styles.cartButton}
                />
            </View>

        </View>
    );
};

export default Details;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 15,
        width: 50,
        height: 50,
        marginStart: 5,
        marginTop: 15,
        backgroundColor: COLORS.lightgray,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loveButton: {
        position: 'absolute',
        top: 40,
        right: 15,
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
    itemText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 20,
        color: COLORS.primary
    },
    imageContainer: {
        flex: 7,
        justifyContent: 'flex-end',
        resizeMode: 'stretch',
        width: '100%',
    },
    bodyContainer: {
        flex: 3,
        width: '100%',
        padding: 20,
    },
    detailsHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    details: {
        marginTop: 15,
        fontSize: 15,
        color: COLORS.white,
    },
    bottomContainer: {
        width: '100%',
        height: 80,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: COLORS.lightblack,
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    cartButton: {
        width: '50%'
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
});
