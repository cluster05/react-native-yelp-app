import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import yelp from './../api/yelp';

const ResultsShowScreen = ({ route, navigation }) => {

    const { id } = route.params;
    const [result, setResult] = useState({});

    const getResults = async () => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
            navigation.setOptions({ title: response.data.name })
        } catch (error) {

        }
    }

    useEffect(() => {
        getResults();
    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.heroImage} source={{ uri: result.image_url }} />
            <FlatList
                style={styles.categories}
                data={result.categories}
                keyExtractor={item => item.title}
                renderItem={({ item }) => (
                    <View style={styles.category}>
                        <Text> {item.title} </Text>
                    </View>
                )}
            />
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.photos}
                data={result.photos}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Image style={styles.photo} source={{ uri: item }} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    heroImage: {
        width: '100%',
        height: 250,
        borderRadius: 5
    },
    categories: {
        marginVertical: 5,
        display: 'flex'
    },
    category: {
        padding: 5,
        margin: 3,
        fontWeight: 'bold',
        borderRadius: 4,
        backgroundColor: '#F0E0FF'
    },
    photos: {
        marginVertical: 10,
    },
    photo: {
        width: 400,
        height: 250,
        borderRadius: 5,
        margin: 10,
        borderWidth: 1
    },

})

export { ResultsShowScreen }