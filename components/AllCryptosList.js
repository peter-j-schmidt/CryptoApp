import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator, SafeAreaView, SectionList } from 'react-native';

export default function AllCryptosList() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coinlore.net/api/tickers/')
            .then((response) => response.json())
            .then((json) => setData(json.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const CryptoTile = ({item}) => (
        <View style={styles.cryptoContainer}>
            <Text>{item.symbol}, {item.name}, {item.price_usd}</Text>
        </View>
    );

    return (
        <>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem = {({ item }) => (
                        <CryptoTile item={item} />
                    )}
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cryptoContainer: {
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });