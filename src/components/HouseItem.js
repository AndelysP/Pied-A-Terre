import React, { useState } from 'react'
import { Text, View, Dimensions, StyleSheet, Image, InteractionManager } from 'react-native'

const HouseItem = (props) => {
  const [item, setItem] = useState(props.route.params.item)

  return (
    <View style={styles.container}>
      <Image
        style={styles.houseImage}
        source={{ uri: item.image }}
      />
      <View style={styles.houseItem}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.options}>{item.options.capacity} personnes - {item.options.room} chambre(s) - {item.options.bed} lit(s) - {item.options.bathroom} salle(s) de bain</Text>
        <Text style={styles.houseText}>{item.desc}</Text>
        <Text style={styles.price}>{item.price}€ par nuit</Text>
        <Text>{item.location}</Text>
      </View>

      <View style={styles.tenantContainer}>
        <Text>Le propriétaire du logement :</Text>
        <View style={styles.infoContainer}>
          <Image
            style={styles.tenantImage}
            source={{ uri: item.tenant.photo }}
          />

          <Text>{item.tenant.name}</Text>
          <Text>{item.tenant.avis} avis vérifiés</Text>
          <Text>{item.tenant.language}</Text>
          <Text>{item.tenant.pro ? "Professionnel" : "Particulier"}</Text>
        </View>
      </View>
    </View>
  )
}

export default HouseItem;

// STYLES // 

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },

  houseImage: {
    width: vw,
    height: vw / 1.5
  },

  houseText: {
    fontSize: 12,
    paddingTop: 10
  },

  houseItem: {
    padding: 10
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },

  price: {
    textAlign: 'center',
    backgroundColor: 'red',
  },

  options: {
    textAlign: 'center',
    fontSize: 12,
    color: 'grey'
  },

  tenantContainer: {
    alignItems: 'center',
    margin: 20,
    backgroundColor: "#cccccc",
    borderRadius: 20
  },

  tenantImage: {
    borderRadius: 50,
    width: vw / 5,
    height: vw / 5,
  },

  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})