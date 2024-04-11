import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable, Dimensions } from 'react-native';
import BottomSheet from "@gorhom/bottom-sheet"
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import PlaceMap from '../../components/Maps/PlaceMap';
import { BASE_URL } from '../../config';
// import MapView from 'react-native-maps';


const Index = () => {
  const bottomSheetRef = useRef(null);
  const [orders, setData] = useState([]);
  const snapPoints = useMemo(() => ["12%", "95%"], [])
  const navigation = useNavigation();
  const [userID, setUserID] = useState();


  const OrderDetails = async (id) => {
    const url =  `${BASE_URL}/Orders/GetrOrder?orderID=` + id;
    let result = await fetch(url);
    result = await result.json();
    if (result) {

      navigation.navigate('OrderDeliveryScreen', { orderItem: result })
    }

  }

  const getApidata = async () => {
    const ID = await AsyncStorage.getItem('userID');
    const url = `${BASE_URL}/Drivers/GetDriverOrders?driverID=` + ID;
    let result = await fetch(url);
    result = await result.json();
    if (result) {

      setData(result)
    }
  }

  useEffect(() => {
    getApidata()
  }, []);

  return (
    <View style = {styles.mapcontainer}>
      <PlaceMap/>
      
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <Text
            style={{ fontSize: 20, fontWeight: '600', letterSpacing: 0.5, paddingBottom: 5 }}>
            Youre Online
          </Text>
          <Text>Available Orders {orders.length}</Text>
        </View>

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
      </BottomSheet>
      <StatusBar style='auto' />
      {/* <OrderItem order={order}/> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 50
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
  },
  mapcontainer: {
    flex: 1,
    //width: width,
    //height: height,
  },
});

export default Index