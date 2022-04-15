import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AppColors from '../../Constaint/AppColors';

const MenuBar = ({ Match, Net, ClickOnMatches, ClickOnNetwork }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={ClickOnMatches}>
                    <Text style={[styles.text, { backgroundColor: Match ? AppColors.ActiveColor : null }]}>Matches</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ClickOnNetwork}>
                    <Text style={[styles.text, { backgroundColor: Net ? AppColors.ActiveColor : null }]} >Network</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    Container: {
        backgroundColor: AppColors.BtnClr,
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: '3%'
    },
    menu: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: '10%',
        borderRadius: 10
    }
})

export default MenuBar