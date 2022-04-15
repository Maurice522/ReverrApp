import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AppColors from '../../Constaint/AppColors';
import {DiscoverData} from '../../dummy-data/DiscoverData';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const NetworkScreen = () => {
  const [Groups, setGroups] = useState('');

  const navigation = useNavigation();
  const getAllGroups = async () => {
    const email = await auth().currentUser;
    // console.log(email.email);
    //const useremail = email.email;
    //setUserEmail(useremail);
    const userData = await firestore()
      .collection('Users')
      .doc(email.email)
      .get();
    setGroups(userData._data.groups);
    // console.log(Groups);
  };
  getAllGroups();
  return (
    <View style={styles.Conatainer}>
      <FlatList
        data={Groups}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.Items}
            onPress={() => {
              navigation.navigate('GroupChatBox', {
                GroupData: item,
              });
            }}>
            {/* <Image style={styles.dp} source={{uri: item.image}} /> */}
            <View style={styles.details}>
              <Text style={styles.Name}>{item.name}</Text>
              {/* <Text style={styles.skills}>{item.skills}</Text> */}
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

export default NetworkScreen;
