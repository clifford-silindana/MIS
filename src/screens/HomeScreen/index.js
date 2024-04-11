import React, { useEffect, useState, useMemo } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable

} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import OrderDeliveryScreen from '../OrderDeliveryScreen/index'
import OrderImage from '../../../assets/images/order.png'
import { Entypo } from "@expo/vector-icons"
import { BASE_URL } from '../../config';

export default function Index() {

  const [orders, setData] = useState([]);
  const [userFirstName, setuserFirstName] = useState();
  const [userID, setUserID] = useState();
  
  const navigation = useNavigation();

  
  const OrderDetails = async (id) => {
    const url = `${BASE_URL}/Orders/GetrOrder?orderID=` + id;
    let result = await fetch(url);
    result = await result.json();
    if (result) {

      navigation.navigate('OrderDeliveryScreen', { orderItem: result })
    }

  }


  const readData = async () => {
    const value = await AsyncStorage.getItem('userFirstName');
    const userIDValue = await AsyncStorage.getItem('userID');

    if (value !== null) {
      setuserFirstName(value);
      setUserID(userIDValue);
    }
  }

  const getApidata = async () => {
    const ID = await AsyncStorage.getItem('userID');
    console.log(ID);
    const url = `${BASE_URL}/Drivers/GetDriverOrders?driverID=` + ID;
    let result = await fetch(url);
    result = await result.json();
    if (result) {

      setData(result)
    }
  }

  useEffect(() => {
    readData();
    getApidata();

  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <Image
              alt=""
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
              }}
              style={styles.avatar} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <FeatherIcon color="#1a2525" name="bell" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.greeting}>
          <Text style={styles.greetingTitle}>Hello, {userFirstName}</Text>
          <Text style={styles.greetingText}>You have 3 Orders</Text>
        </View>
        <View style={styles.search}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#9695b0"
            style={styles.searchInput}
          />
          <View style={styles.searchFloating}>
            <TouchableOpacity>
              <View style={styles.searchButton}>
                <FeatherIcon name="search" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitle}>Orders</Text>
          <TouchableOpacity>
            <Text style={styles.contentLink}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentPlaceholder}>
          <FlatList
            numColumns={1}
            keyExtractor={(item) => item.id}
            data={orders}
            renderItem={({ item }) => (
              <Pressable onPress={() => OrderDetails(item.id)}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", margin: 10, borderColor: '#0069fe', borderWidth: 2, borderRadius: 10, borderBottomLeftRadiusRadius: 10, borderTopLeftRadiusRadius: 10 }}>
                  <View style={{ marginLeft: 10, flex: 1, paddingVertical: 5 }}>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.first_name} {item.last_name}</Text>
                    <Text style={{ color: 'grey' }}>Cell : {item.phone}</Text>
                    <Text style={{ color: 'grey' }}>Order Date : {item.date_created}</Text>
                    <Text style={{ color: 'grey' }}>Amount : R{item.amount}</Text>
                    <Text style={{ marginTop: 10 }}>Delivery Address</Text>
                    <Text style={{ color: 'grey' }}>{item.address_1} {item.address_2} {item.postcode}</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

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
});