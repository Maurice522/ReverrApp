import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../../Constaint/AppColors';
import CustomBtn from '../CustomBtn';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const PricingCard = props => {
  return (
    <View style={{alignItems: 'center', height: Height / 2.4}}>
      <FlatList
        data={props.PricingData}
        horizontal
        renderItem={({item}) => (
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: 0.8, y: 1.3}}
            end={{x: 1, y: 0.5}}
            style={[
              styles.Card,
              {
                borderColor: item.id == 1 ? AppColors.ActiveColor : null,
                borderWidth: item.id == 1 ? 2 : null,
              },
            ]}>
            {item.id != 1 ? (
              <View style={[styles.button, {marginBottom: '10%'}]}>
                <Text style={{color: AppColors.FontsColor}}>Save 25%</Text>
              </View>
            ) : null}
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.duration}>{item.duration}</Text>
            <TouchableOpacity style={[styles.button, {marginTop: '6%'}]}>
              <Text style={{color: AppColors.FontsColor}}>Purchase</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
      />
      <CustomBtn Title="Get Started" />
      <Text
        style={{
          color: AppColors.infoFonts,
          fontFamily: 'Poppins-Regular',
          paddingHorizontal: '5%',
          marginTop: '3%',
          fontSize: 11,
        }}>
        Subscription will automatically renew and your card will be charged at
        the end of the period
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {
    width: Width / 3.3,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: Height / 4,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: AppColors.CardColor,
    paddingHorizontal: '20%',
    paddingVertical: '3%',
    borderRadius: 8,
  },
  type: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
  },
  price: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
  },
  duration: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
});
export default PricingCard;
