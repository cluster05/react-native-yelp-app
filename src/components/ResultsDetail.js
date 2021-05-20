import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ResultsDetail = ({ result }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Result', { id: result.id })} >
            <View style={styles.container}>
                <Image
                    source={{ uri: result.image_url }}
                    style={styles.image}
                />
                <Text style={styles.name}> {result.name} </Text>
                <Text style={styles.start_review}> {result.rating} ⭐ , {result.review_count} 🗒 Reviews </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    image: {
        width: 250,
        maxWidth: 250,
        height: 150,
        borderRadius: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
    }
})

export { ResultsDetail }
