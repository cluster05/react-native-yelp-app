import React, { useState } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { ResultList } from '../components/ResultList';
import { SearchBar } from '../components/SearchBar'
import useResult from '../hooks/useResults';
const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [seachApi, results, errorMessage] = useResult();

    const filterReultByPrice = (price) => {
        return results.filter(result => result.price === price)
    }

    return (
        <View style={styles.viewAll}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => seachApi(term)}
            />
            {errorMessage ? <Text> {errorMessage} </Text> : null}
            <ScrollView>
                <ResultList
                    title="Cost Effective"
                    results={filterReultByPrice("$")}
                />
                <ResultList
                    title="Bit Pricier"
                    results={filterReultByPrice("$$")}
                />
                <ResultList
                    title="Big Spender"
                    results={filterReultByPrice("$$$")}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    viewAll: {
        flex: 1,
        marginBottom: 20
    }
})

export { SearchScreen }
