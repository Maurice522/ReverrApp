import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppColors from '../../Constaint/AppColors';
import auth from '@react-native-firebase/auth';
import {AllMentors} from '../../dummy-data/AllMentors';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const MatchesScreen = () => {
  const [UserEmail, setUserEmail] = useState('');
  const [YourMatches, setYourMatches] = useState();

  const navigation = useNavigation();
  const getMatches = async () => {
    const email = await auth().currentUser;
    const userData = await firestore()
      .collection('Users')
      .doc(email.email)
      .get();
    setYourMatches(userData._data.matched);
    //console.log(YourMatches);
  };
  getMatches();

  return (
    <View style={styles.Conatainer}>
      <FlatList
        data={YourMatches}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.Items}
            onPress={() => {
              navigation.navigate('ChatBox', {
                userData: item,
              });
            }}>
            <Image style={styles.dp} source={{uri: item.image}} />
            <View style={styles.details}>
              <Text style={styles.Name}>{item.name}</Text>
              <Text style={styles.skills}>{item.about}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Conatainer: {
    backgroundColor: AppColors.CardColor,
    marginHorizontal: '2%',
    borderRadius: 8,
    marginTop: '2%',
  },
  Items: {
    flexDirection: 'row',
    padding: '3%',
  },
  dp: {
    width: 50,
    borderRadius: 100,
    height: 50,
  },
  details: {
    alignItems: 'center',
    marginTop: '1%',
    marginStart: '2%',
  },
  Name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
  },
  skills: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
});

export default MatchesScreen;
