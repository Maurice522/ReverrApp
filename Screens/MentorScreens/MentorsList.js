import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Backbtn from '../../Componants/Backbtn';
import AppColors from '../../Constaint/AppColors';
import SearchBar from '../../Componants/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GetAllMentors} from '../../utils/fireBaseFunctions';
import {useNavigation} from '@react-navigation/native';
import HeaderLayout from '../HomeScreens/HeaderLayout';
import LinearGradient from 'react-native-linear-gradient';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MentorsList = props => {
  const navigation = useNavigation();
  const mentorData = props.route.params.mentorData;
  const [all, setAll] = useState();
  const [listColumn, setListColumn] = useState(2);
  useEffect(() => {
    GetAllMentors(setAll);
  }, []);

  return (
    <HeaderLayout>
      <View style={styles.screen}>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: 0, y: 1.3}}
          end={{x: 1, y: 0.5}}
          style={styles.Header}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: AppColors.FontsColor,
              fontSize: 17,
            }}>
            {mentorData && mentorData.name}
          </Text>
        </LinearGradient>
        <View>
          <FlatList
            data={all}
            numColumns={2}
            renderItem={({item}) => (
              <LinearGradient
                colors={[AppColors.primarycolor, '#012437']}
                start={{x: 0.4, y: 1.3}}
                end={{x: 1, y: 0.5}}
                style={styles.Card}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => {
                    navigation.navigate('MentorsProfile', {
                      profileDetails: item,
                    });
                  }}>
                  <Image
                    style={styles.Dp}
                    source={require('../../assets/Images/jatindp.png')}
                  />
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.Name}>{item.name}</Text>
                    <Text style={styles.Skills}>{item.skills}</Text>
                  </View>
                  <View style={styles.rating}>
                    <Icon name="star" size={12} color={AppColors.infoFonts} />
                    <Icon
                      name="star"
                      size={12}
                      style={{marginStart: '3%'}}
                      color={AppColors.infoFonts}
                    />
                    <Icon
                      name="star"
                      size={12}
                      style={{marginStart: '3%'}}
                      color={AppColors.infoFonts}
                    />
                    <Icon
                      name="star"
                      size={12}
                      style={{marginStart: '3%'}}
                      color={AppColors.infoFonts}
                    />
                    <Icon
                      name="star"
                      size={12}
                      style={{marginStart: '3%'}}
                      color={AppColors.infoFonts}
                    />
                    <Text
                      style={{
                        color: AppColors.ActiveColor,
                        marginStart: '5%',
                      }}>
                      76 Review
                    </Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            )}
          />
        </View>
      </View>
    </HeaderLayout>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  Header: {
    height: Height / 12,
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: '2%',
  },
  Card: {
    marginVertical: 10,
    width: Width / 2.18,
    marginHorizontal: '2%',
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  Dp: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  container: {
    flexDirection: 'row',
  },
  Name: {
    color: AppColors.FontsColor,
    fontSize: 13,
    marginTop: '4%',
    fontFamily: 'Poppins-Regular',
  },
  Skills: {
    color: AppColors.infoFonts,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  schedule: {
    paddingHorizontal: Width / 50,
    paddingVertical: 5,
    marginVertical: '5%',
    flexDirection: 'row',
    borderColor: AppColors.FontsColor,
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 15,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default MentorsList;
