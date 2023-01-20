import React, { useState } from 'react'
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native'

//Chargement des icônes
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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
        <Text style={styles.location}><Entypo name='location-pin' style={{fontSize: 15, color: '#52675E' }}/>{item.location}</Text>
        <Text style={styles.options}>{item.options.capacity} personnes - {item.options.room} chambre(s) - {item.options.bed} lit(s) - {item.options.bathroom} salle(s) de bain</Text>
        <Text style={styles.houseText}>{item.desc}</Text>
        <Text style={styles.price}>{item.price}€ par nuit</Text>
      </View>

      <View style={styles.tenantContainer}>
        <Text style={styles.tenantTextContainer}>Proposé par:</Text>
        <View style={styles.infoContainer}>
          <Image
            style={styles.tenantImage}
            source={{ uri: item.tenant.photo }}
          />

          <Text style={styles.tenantTextContainer}>{item.tenant.name}</Text>
          <Text style={styles.tenantTextContainer}><AntDesign name='star' style={{color: '#ABA351'}} />{item.tenant.avis} avis vérifiés</Text>
          <Text style={styles.tenantTextContainer}><MaterialIcons name='language' />{item.tenant.language}</Text>
          <Text style={styles.tenantTextContainer}>{item.tenant.pro ? "Professionnel" : "Particulier"}</Text>
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
    paddingTop: 10,
    paddingBottom: 10
  },

  houseItem: {
    padding: 10,
    alignItems: 'center'
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#52675E'
  },

  location: {
    fontSize: 13
  },

  price: {
    backgroundColor: '#6B9080',
    color: '#fff',
    padding: 5,
    width: 110,
    textAlign: 'center'
  },

  options: {
    textAlign: 'center',
    fontSize: 12,
    color: 'grey'
  },

  tenantContainer: {
    alignItems: 'center',
    margin: 20,
    backgroundColor: "#EBEBEB",
    borderRadius: 20
  },

  tenantImage: {
    borderRadius: 50,
    margin: 5,
    width: vw / 5,
    height: vw / 5,
  },

  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  tenantTextContainer: {
    fontSize: 11
  }
})