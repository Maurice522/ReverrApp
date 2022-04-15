import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomBtn from '../../Componants/CustomBtn';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

const ApplyFunding = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerText}>Funding</Text>
      </View>
      <Image
        style={styles.img}
        source={require('../../assets/Images/funding.png')}
      />
      <View style={styles.form}>
        <Text style={[styles.title, {marginTop: '-4%'}]}>Name</Text>
        <TextInput style={styles.input} />
        <Text style={styles.title}>Company Name</Text>
        <TextInput style={styles.input} />
        <Text style={styles.title}>Pitch deck</Text>
        <View style={styles.deck}>
          <Icon name="upload" size={30} color={AppColors.infoFonts} />
        </View>
        <CustomBtn style={styles.btn} Title="Submit" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerText: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Bold',
    marginStart: '30%',
    fontSize: 18,
  },
  img: {
    width: Width / 2,
    height: Height / 4,
    alignSelf: 'center',
    marginTop: '15%',
  },
  form: {
    paddingHorizontal: '5%',
  },
  title: {
    color: AppColors.FontsColor,
    marginTop: '4%',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  input: {
    backgroundColor: AppColors.inputFieldColor,
    paddingVertical: 8,
    borderRadius: 7,
    paddingStart: '5%',
    fontSize: 18,
  },
  deck: {
    backgroundColor: AppColors.inputFieldColor,
    paddingVertical: 7,
    alignItems: 'center',
    borderRadius: 7,
    paddingStart: '5%',
  },
  btn: {
    marginTop: '8%',
  },
});
export default ApplyFunding;
