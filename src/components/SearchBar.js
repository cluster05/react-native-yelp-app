import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather
                name="search"
                style={styles.iconsStyle}
            />
            <TextInput

                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
                onChangeText={onTermChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 15,

        flexDirection: 'row',
        paddingHorizontal: 10
    },
    iconsStyle: {
        fontSize: 35,
        color: 'black',
        alignSelf: 'center'
    },
    inputStyle: {
        flex: 1,
        marginHorizontal: 15,
        fontSize: 18
    }

});

export { SearchBar }