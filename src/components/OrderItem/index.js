import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import OrderImage from '../../../assets/images/order.png'
import { } from 'react-native-web';
import { Entypo } from "@expo/vector-icons"

const OrderItem = ({order}) => {


    return (
        order.length ? order.map((item) =>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", margin: 10, borderColor: '#3FC060', borderWidth: 2, borderRadius: 10, borderBottomLeftRadiusRadius: 10, borderTopLeftRadiusRadius: 10 }}>
                <Image
                    source={OrderImage}
                    style={{ width: 90, height: '90%', borderRadius: 10 }}
                />
                <View style={{ marginLeft: 10, flex: 1, paddingVertical: 5 }}>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.first_name} {item.last_name}</Text>
                    <Text style={{ color: 'grey' }}>Cell : {item.phone}</Text>
                    <Text style={{ color: 'grey' }}>Order Date : {item.date_created}</Text>

                    <Text style={{ marginTop: 10 }}>Delivery Address</Text>
                    <Text style={{ color: 'grey' }}>{item.address_1} {item.address_2} {item.postcode}</Text>
                </View>
                <View style={{ backgroundColor: '#3FC060', borderBottomRightRadius: 10, borderTopRightRadius: 10 }}>
                    <Entypo name="check" size={30} color="black" style={{ marginLeft: "auto" }} />
                </View>

            </View>
        )
            : null
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    content: {
        padding: 40
    },

    list: {
        marginTop: 20
    },
    wrapper: {
        backgroundColor: 'orange',
        margin: 84,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7
    }
});

export default OrderItem