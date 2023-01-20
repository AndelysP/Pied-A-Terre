import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, Dimensions, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import houses from '../../Houses'

const Home = (props) => {

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
                    <Text style={styles.houseTextPrice}>{item.price.toLocaleString('fr-Fr')}€ par nuit</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('HouseItem', { item })}>
                    <Button
                            title='Réserver'
                            color="#6B9080"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const housesMostReserved = houses.sort((itemA, itemB) => itemB.reservations - itemA.reservations).slice(0, 5);


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.heroContainer}
                    onPress={() => props.navigation.navigate("HouseList")}
                >
                    <ImageBackground
                        source={require('../../assets/background.jpeg')}
                        style={styles.hero}
                        imageStyle={{ borderRadius: 15 }}
                    >
                        <LinearGradient
                            colors={["transparent", "#000"]}
                            style={styles.heroTextContainer}
                        >
                            <Text style={styles.heroText}>{houses.length} Logements à découvrir</Text>
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>

                <View style={styles.mostReservedContainer}>
                    <Text style={styles.sectionTitle}>Les plus réservés</Text>

                    <FlatList 
                        data={housesMostReserved}
                        renderItem={({ item }) => renderMostReservedHouse(item)}
                        keyExtractor={item => item.id}
                        numColumns="2"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;

// STYLES //

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        padding: 20
    },

    heroContainer: {
        marginBottom: 20
    },

    hero: {
        height: vh / 4,
        justifyContent: "flex-end"
    },

    heroTextContainer: {
        borderRadius: 15
    },

    heroText: {
        fontSize: 20,
        color: 'white',
        padding: 10,
        marginStart: 5
    },

    mostReservedContainer: {
        height: vh / 1.85,
        marginTop: 10
    },

    sectionTitle: {
        color: "#52675E",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10
    },

    houseItem: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        height: vh / 3.75,
        backgroundColor: "#EAF4F4",
        margin: 5,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 15
    },

    houseImage: {
        width: '100%',
        height: '65%',
        borderRadius: 10
    },

    houseText: {
        fontSize: 14,
        fontWeight: "bold",
        padding: 5
    },

    houseTextPrice: {
        padding: 5,
        fontSize: 12
    }
});