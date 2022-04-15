import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';

const AboutCard = (props) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={{
                alignItems: 'center',
                paddingHorizontal: '2.5%'
            }}>
                <Text style={styles.desc}>{props.description}</Text>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: AppColors.CardColor,
        width: '100%',
        height: 'auto',
        paddingBottom: '2%',
        borderRadius: 10,
    },
    title: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        marginStart: '3%',
        marginTop: '2%'
    },
    desc: {
        color: AppColors.infoFonts,
        fontFamily: 'Poppins-Regular',
        lineHeight: 17,
        fontSize: 12
    }

});

export default AboutCard;