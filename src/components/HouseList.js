import React, { useEffect, useState } from 'react'
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions, SafeAreaView } from 'react-native'
import houses from '../../Houses'

const HouseList = (props) => {

  const [filters, setFilters] = useState({
    visible: false,
    priceStart: 0,
    priceEnd: 2000,
    capacityStart: 1,
    capacityEnd: 16
  })

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => toggleFilters()}>
          <Text style={styles.filterButton}>Filtres</Text>
        </TouchableOpacity>
      )
    });
  }, [])

  const toggleFilters = () => {
    setFilters({
      ...filters,
      visible: !filters.visible
    });
  }

  const handleChange = (event, name) => {
    setFilters({
      ...filters,
      [name]: event.nativeEvent.text
    });
  }

  const renderHouseItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.houseItem}
        onPress={() => props.navigation.navigate("HouseItem", { item })}
      >
        <Image
          style={styles.houseImage}
          source={{ uri: item.image }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.houseTextTitle}>{item.name}</Text>
          <Text style={styles.houseText}>{item.price.toLocaleString('fr-FR')}€ par nuit</Text>
          <Text style={styles.houseText}>{item.location}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const renderFilters = () => {
    if (filters.visible) {
      return (
        <View style={styles.filters}>
          <View style={styles.filter}>
            <Text>Prix</Text>
            <TextInput
              style={styles.input}
              defaultValue={filters.priceStart.toString()}
              keyboardType="number-pad"
              onEndEditing={(e) => handleChange(e, "priceStart")}
            />
            <Text>-</Text>
            <TextInput
              style={styles.input}
              defaultValue={filters.priceEnd.toString()}
              keyboardType="number-pad"
              onEndEditing={(e) => handleChange(e, "priceEnd")}
            />
          </View>
          <View style={styles.filter}>
            <Text>Nombre de personnes</Text>
            <TextInput
              style={styles.input}
              defaultValue={filters.capacityStart.toString()}
              keyboardType="number-pad"
              onEndEditing={(e) => handleChange(e, "capacityStart")}
            />
            <Text>-</Text>
            <TextInput
              style={styles.input}
              defaultValue={filters.capacityEnd.toString()}
              keyboardType="number-pad"
              onEndEditing={(e) => handleChange(e, "capacityEnd")}
            />
          </View>
        </View>
      );
    }
  }

  const houseFiltered = houses.filter((item) => ((item.price >= filters.priceStart) && (item.price <= filters.priceEnd) && (item.options.capacity >= filters.capacityStart) && (item.options.capacity <= filters.capacityEnd)))

  return (
    <SafeAreaView>
      {renderFilters()}

      <FlatList
        data={houseFiltered}
        renderItem={({ item }) => renderHouseItem(item)}
        keyExtractor={item => item.id}
        ListEmptyComponent={<View style={styles.empty}><Text>Aucun logement ne correspond à votre recherche</Text></View>}
      />
    </SafeAreaView>
  )
}

export default HouseList;

// STYLES //

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  houseItem: {
    flexDirection: "row",
    height: vh / 6,
    backgroundColor: "#EAF4F4",
    margin: 10,
    borderRadius: 15,
    borderColor: "#A4C3B2",
    borderWidth: 1,
    borderRadius: 15
  },

  houseImage: {
    width: 200,
    height: '100%',
    borderRadius: 10
  },

  houseTextTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    color: "#52675E"
  },

  houseText: {
    padding: 10,
    fontSize: 12
  },

  filterButton: {
    color: 'white',
    padding: 10,
    fontSize: 18
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },

  filters: {
    backgroundColor: "rgba(242, 242, 242, 0.95)",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },

  filter: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 15
  },

  input: {
    width: vw / 4,
    padding: 10,
    borderColor: "#52675E",
    borderWidth: 1,
    borderRadius: 15
  },

  empty: {
    flex: 1,
    height: vh,
    justifyContent: 'center',
    alignItems: 'center'
  }
});