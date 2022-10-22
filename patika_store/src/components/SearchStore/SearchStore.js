import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from './SearchStore.style';
const SearchStore = ({ setText }) => {

    const handleChange = (e) => {
        setText(e)
    }
    return (
        <View>
            <TextInput
                placeholder="Ara..."
                placeholderTextColor={'#BBBBBB'}
                style={styles.textInput}
                onChangeText={handleChange}

            ></TextInput>
        </View>
    )
};
export default SearchStore;
