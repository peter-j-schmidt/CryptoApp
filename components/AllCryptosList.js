import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';

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

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem = {({ item }) => (
                        <Text>{item.symbol}, {item.name}, {item.price_usd}</Text>
                    )}
                />
            )}
        </View>
    );
};