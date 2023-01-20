import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import houses from '../../Houses'

const HouseList = (props) => {

  const [filters, setFilters] = useState({
    visible: false,
    priceStart: 0,
    priceEnd: 2000,
    capacityStart: 1,
    capacityEnd: 16
  })
 
}