import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {Data} from '../../dummy-data/dummyData';
import AppColors from '../../Constaint/AppColors';
import LinearGradient from 'react-native-linear-gradient';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const WeeksMentors = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            color: AppColors.FontsColor,
            fontFamily: 'Poppins-Regular',
            fontSize: 17,
            width: Width / 1.25,
          }}>
          Mentor of week
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
      <FlatList
        data={Data}
        horizontal
        renderItem={({item}) => (
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: 0.4, y: 1.3}}
            end={{x: 1, y: 0.5}}
            style={styles.Card}>
            <TouchableOpacity activeOpacity={0.6}>
              <Image style={styles.dp} source={{uri: item.image}} />
              <Text style={styles.Name}>{item.name}</Text>
              <Text style={styles.skills}>{item.skills}</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {
    padding: 5,
    paddingTop: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dp: {
    width: 105,
    height: 90,
    borderRadius: 10,
  },
  Name: {
    color: AppColors.FontsColor,
    width: '50%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: Height / 95,
  },
  skills: {
    color: AppColors.infoFonts,
    marginTop: -20,
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '2%',
    alignItems: 'center',
  },
});

export default WeeksMentors;
