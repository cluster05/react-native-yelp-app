import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ResultsDetail } from './ResultsDetail';
const ResultList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginVertical: 10
    }

})

export { ResultList };