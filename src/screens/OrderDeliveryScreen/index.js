import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import {
    StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Image,
    Pressable
} from 'react-native';
import { } from 'react-native-web';
import OrderImage from '../../../assets/images/order.png'
import { Entypo } from "@expo/vector-icons"
import BottomSheet from "@gorhom/bottom-sheet"
import { FontAwesome5, Fontisto } from "@expo/vector-icons"
import CustomButton from '../../components/CustomButton/CustomButton'
import { useRoute } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const OrderDeliveryScreen = () => {
    const route = useRoute();
    const orderItem = route.params.orderItem;

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["12%", "95%"], [])

    return (

        <View style={{ backgroundColor: 'lighblue', flex: 1 }}>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                handleIndicatorStyle={{ backgroundColor: 'grey', width: 100 }}
            >
                <View style={styles.banner}>
                <FontAwesome5
                        name="shopping-bag"
                        size={20}
                        color="#000"
                        style={{ marginHorizontal: 10 }}
                    />
                    <Text style={styles.bannerText}>14 Mins (5km)</Text>
                    <Text style={styles.bannerText}>Total Amount R{route.params.orderItem.amount}</Text>
                </View>
                <TouchableOpacity style={styles.banner}>
                    <View>
                        <Text style={styles.bannerTitle}>{route.params.orderItem.first_name} {route.params.orderItem.last_name}</Text>
                        <Text style={styles.bannerText}>
                            <Text style={{ fontWeight: 'bold', color: '#000' }}>Phone : </Text>{' '}
                            {route.params.orderItem.phone}
                        </Text>
                        <Text style={styles.bannerText}>
                            <Text style={{ fontWeight: 'bold', color: '#000' }}>Order Date : </Text>{' '}
                            {route.params.orderItem.date_created}
                        </Text>
                        <Text style={styles.bannerText}>
                            <Text style={{ fontWeight: 'bold', color: '#000' }}>Address </Text>{' '}
                        </Text>
                        <Text style={styles.bannerText}>
                            {route.params.orderItem.address_1} 
                        </Text>
                        <Text style={styles.bannerText}>
                            {route.params.orderItem.address_2}
                        </Text>
                        <Text style={styles.bannerText}>
                             {route.params.orderItem.postcode}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <Text style={styles.contentTitle}>Order Items</Text>
                        <TouchableOpacity>
                            <Text style={styles.contentLink}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentPlaceholder}>
                        <FlatList
                            numColumns={1}
                            keyExtractor={(item) => item.id}
                            data={route.params.orderItem.orderLineItems}
                            renderItem={({ item }) => (
                                <Pressable onPress={() => navigation.navigate('OrderDeliveryScreen', { id: item.id })}>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", margin: 10, borderColor: '#a5e45b', borderWidth: 2, borderRadius: 10, borderBottomLeftRadiusRadius: 10, borderTopLeftRadiusRadius: 10 }}>
                                        <View style={{ marginLeft: 10, flex: 1, paddingVertical: 5 }}>
                                            <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.first_name} {item.last_name}</Text>
                                            <Text style={{ color: 'grey' }}>Name : {item.name}</Text>
                                            <Text style={{ color: 'grey' }}>Price : R{item.price}</Text>
                                        </View>
                                    </View>
                                </Pressable>
                            )}
                        />
                    </View>
                </View>
                <View>
                    <CustomButton text="Accept Order" onPress={() => {
                        login('SUPERUSER', '12345Tuks!');
                    }}
                    />
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    top: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 9999,
    },
    /** Greeting */
    greeting: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.15)',
        marginBottom: 12,
    },
    greetingTitle: {
        fontSize: 32,
        fontWeight: '800',
        color: '#1a2525',
    },
    greetingText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1a2525',
        marginTop: 8,
    },
    /** Search */
    search: {
        position: 'relative',
    },
    searchInput: {
        height: 56,
        backgroundColor: '#f3f3f6',
        paddingHorizontal: 16,
        color: '#1a2525',
        fontSize: 18,
        borderRadius: 9999,
    },
    searchFloating: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    searchButton: {
        alignSelf: 'center',
        width: 44,
        height: 44,
        borderRadius: 9999,
        backgroundColor: '#5bd2bc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    /** Content */
    content: {
        paddingVertical: 8,
        paddingHorizontal: 22,
        flex: 1,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    contentTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#1a2525',
    },
    contentLink: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1a2525',
    },
    contentPlaceholder: {
        borderStyle: 'dashed',
        borderWidth: 4,
        borderColor: '#e5e7eb',
        flex: 1,
        borderRadius: 8,
    },
    /** Banner */
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        marginHorizontal: 24,
        backgroundColor: '#a5e45b',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    bannerTitle: {
        fontSize: 22,
        color: '#000',
        fontWeight: '600',
        marginBottom: 8,
    },
    bannerText: {
        fontSize: 15,
        color: '#2f5107',
        fontWeight: '400',
    },
});

export default OrderDeliveryScreen;
