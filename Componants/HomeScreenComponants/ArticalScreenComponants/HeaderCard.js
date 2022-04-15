import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import AppColors from '../../../Constaint/AppColors';

const HeaderCard = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        style={{flex: 1, borderRadius: 20}}
        source={require('../../../assets/Images/card.png')}>
        <View style={styles.title}>
          <Text
            style={{
              color: AppColors.FontsColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 18,
            }}>
            “Business opportunities are like buses, there’s always another one
            coming.”
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingVertical: 5,
    alignItems: 'center',
  },
});

export default HeaderCard;
