import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Backbtn from '../../../Componants/Backbtn';
import AppColors from '../../../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const ArticalDetailsScreen = props => {
  const navigation = useNavigation();
  const articaldetails = props.route.params.articalData;
  // console.log(articaldetails);
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primarycolor}}>
      <View style={styles.header}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.heading}>Article</Text>
      </View>
      <View style={styles.DetailsContainer}>
        <Text style={styles.subHeading}>Market Research</Text>
        <View style={styles.details}>
          <Text style={styles.text}>
            Market Research Mentor is the terminal where all industrial,
            commercial and profitmaking venture will get the best research
            reports of the market in all sectors like automotive, electronics,
            pharmaceuticals and healthcare, food and beverages etc.Market
            Research Mentor is the terminal where all industrial, commercial and
            profitmaking venture will get the best research reports of the
            market in all sectors like automotive, electronics, pharmaceuticals
            and healthcare, food and beverages etc.
          </Text>
        </View>
        <View style={styles.BtnContainer}>
          <TouchableOpacity style={styles.PreviousBtn}>
            <Icon name="arrow-left" size={20} color={AppColors.FontsColor} />
            <Text
              style={{
                marginStart: 20,
                color: AppColors.FontsColor,
                fontFamily: 'Poppins-Regular',
              }}>
              Previous
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NextBtn}>
            <Icon name="arrow-right" size={20} color={AppColors.FontsColor} />
            <Text
              style={{
                marginEnd: 20,
                color: AppColors.FontsColor,
                fontFamily: 'Poppins-Regular',
              }}>
              Previous
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginStart: 85,
  },
  DetailsContainer: {
    alignItems: 'center',
  },
  subHeading: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  details: {
    backgroundColor: AppColors.BtnClr,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    lineHeight: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 40,
  },
  PreviousBtn: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 50,
    marginEnd: 20,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
    backgroundColor: AppColors.BtnClr,
  },
  BtnContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  NextBtn: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 10,
    height: 50,
    width: 150,
    marginEnd: 20,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: AppColors.BtnClr,
  },
});

export default ArticalDetailsScreen;
