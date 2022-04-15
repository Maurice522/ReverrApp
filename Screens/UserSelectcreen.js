import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppColors from '../Constaint/AppColors';
import Backbtn from '../Componants/Backbtn';
import LinearGradient from 'react-native-linear-gradient';

const UserSelectcreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headertext}>Select Profile</Text>
      </View>
      <Text style={styles.infoText}>What are you here for?</Text>
      <View style={styles.ButtonsContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('Signup', {
              UserType: 'Individual',
            });
          }}>
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: 0, y: 1.3}}
            end={{x: 1, y: 0.5}}
            style={styles.button}>
            <Text style={styles.btnTitle}>Individual</Text>
            <Text style={styles.btnInfo}>
              Market Research Mentor is the terminal where all industrial,
              commercial and profitmaking venture will get the best research
              reports
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('Signup', {
              UserType: 'Startup',
            });
          }}>
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: 0, y: 1.3}}
            end={{x: 1, y: 0.5}}
            style={styles.button}>
            <Text style={styles.btnTitle}>Startup</Text>
            <Text style={styles.btnInfo}>
              Market Research Mentor is the terminal where all industrial,
              commercial and profitmaking venture will get the best research
              reports
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('Signup', {
              UserType: 'Mentor',
            });
          }}>
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: 0, y: 1.3}}
            end={{x: 1, y: 0.5}}
            style={styles.button}>
            <Text style={styles.btnTitle}>Mentor</Text>
            <Text style={styles.btnInfo}>
              Market Research Mentor is the terminal where all industrial,
              commercial and profitmaking venture will get the best research
              reports
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headertext: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
    marginStart: '20%',
  },
  infoText: {
    marginStart: '30%',
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
  },
  ButtonsContainer: {
    marginTop: 50,
  },
  button: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  btnTitle: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    marginTop: 10,
  },
  btnInfo: {
    color: AppColors.infoFonts,
    marginBottom: 10,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});

export default UserSelectcreen;
