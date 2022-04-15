import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AppColors from '../../Constaint/AppColors';
import SearchBar from '../../Componants/SearchBar';
import WeeksMentors from '../../Componants/MentorScreenComponents/WeeksMentors';
import MentorsCategories from '../../Componants/MentorScreenComponents/MentorsCategories';
import {useNavigation} from '@react-navigation/native';
import HeaderLayout from '../HomeScreens/HeaderLayout';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const MentorScreen = () => {
  const [List, setList] = useState(false);
  const navigation = useNavigation();

  return (
    <HeaderLayout>
      <View>
        <Text style={styles.Text1}>Find the best mentor</Text>
      </View>
      <SearchBar />
      <WeeksMentors />
      <MentorsCategories />
    </HeaderLayout>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  Text1: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    marginStart: '4%',
  },
  Text2: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginTop: '-3%',
    marginStart: '4%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',

    marginTop: '2%',
    alignItems: 'center',
  },
});

export default MentorScreen;
