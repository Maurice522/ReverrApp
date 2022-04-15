import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {MentorsCategory} from '../../dummy-data/MentorsCategoriesData';
import AppColors from '../../Constaint/AppColors';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MentorsCategories = () => {
  const [clmn, setclmn] = useState(2);
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            color: AppColors.FontsColor,
            fontSize: 17,
            fontFamily: 'Poppins-Regular',
            width: Width / 1.25,
          }}>
          Explore Categories
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: AppColors.FontsColor,
              fontFamily: 'Poppins-Regular',
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={MentorsCategory}
          nestedScrollEnabled={true}
          numColumns={clmn}
          renderItem={({item}) => (
            <LinearGradient
              colors={[AppColors.primarycolor, '#012437']}
              start={{x: 0.4, y: 1.3}}
              end={{x: 1, y: 0.5}}
              style={styles.Card}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('List', {mentorData: item});
                }}
                activeOpacity={0.6}
                style={styles.Card}>
                <Image style={styles.dp} source={{uri: item.image}} />
                <Text
                  style={{
                    marginStart: '6%',
                    color: AppColors.FontsColor,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {
    width: Width / 2.23,
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    borderRadius: 5,
  },
  dp: {
    width: Width / 6,
    height: Height / 16,
    borderRadius: 5,
  },
  Name: {
    color: AppColors.FontsColor,
    width: '50%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    paddingTop: 5,
  },
  skills: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
  container: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MentorsCategories;
