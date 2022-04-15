import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import AppColors from '../../Constaint/AppColors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {

    const [PlaceHolder, setPlaceHolder] = useState("Serach")
    return (
        <View style={styles.Conataner}>
            <TextInput style={styles.input} selectionColor='white' value={PlaceHolder} onFocus={() => { setPlaceHolder("") }} />
            <TouchableOpacity>
                <Icon name='search' size={28} color={AppColors.FontsColor} />
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    Conataner: {
        backgroundColor: AppColors.BtnClr,
        marginHorizontal: '4%',
        marginTop: '4%',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10
    },
    input: {
        paddingVertical: 6,
        paddingStart: 10,
        fontSize: 15,
        width: '90%',
        fontFamily: 'Poppins-Regular',
        backgroundColor: AppColors.BtnClr,
        borderRadius: 10,
        color: AppColors.FontsColor
    }
})

export default SearchBar