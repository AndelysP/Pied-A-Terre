import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Houses from '../../Houses';

const Home = () => {

    const renderMostReservedHouse = (item) => {
        return (
            <View style={styles.houseItem}>
                <Image
                    style={styles.houseImage}
                    source={{ uri: item.image }}
                    resizemode={'contain'}
                />
                <View>
                    <Text style={styles.houseText}>{item.name}</Text>
                    <Text>{item.price.toLocaleString('fr-Fr')}€ par jour</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('HouseItem', {item})}>
                        <Text style={styles.bookButton}>Réserver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    // const housesMostreserved = Houses.sort((itemA, itemB) => itemB.reservations - itemA.reservations).slice(0, 5);


  return (
    <SafeAreaView>
        <View style={styles.container}>
            <TouchableOpacity
                
            ></TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
    houseItem : {

    }
})