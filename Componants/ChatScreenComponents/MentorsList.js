import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';

const MentorsList = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.header}>Mentors</Text>
      <FlatList
        data={props.YourMentors}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.Card}
            onPress={() => {
              navigation.navigate('ChatBox', {
                userData: item,
              });
            }}>
            <Image style={styles.dp} source={{uri: item.image}} />
            <Text style={styles.Name}>{item.name}</Text>
            <Text style={styles.Skill}>{item.skills}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: '5%',
    fontSize: 18,
  },
  dp: {
    width: '80%',
    height: '80%',
    borderRadius: 15,
  },
  Card: {
    backgroundColor: AppColors.CardColor,
    width: 80,
    height: 90,
    alignItems: 'center',
    paddingVertical: '10%',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  Name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    paddingStart: '6%',
    paddingTop: '5%',
    lineHeight: 9,
    width: '100%',
  },
  Skill: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    fontSize: 6,
    lineHeight: 6,
  },
});

export default MentorsList;
