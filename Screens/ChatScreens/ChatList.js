import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import AppColors from '../../Constaint/AppColors';
import SearchBar from '../../Componants/ChatScreenComponents/SearchBar';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import HeaderLayout from '../HomeScreens/HeaderLayout';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import {ChatContext, UserContext} from '../../App';
import {CreateMessagePath} from '../../utils/fireBaseFunctions';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const ChatList = () => {
  const navigation = useNavigation();
  const {state, dispatch} = useContext(UserContext);
  const {chatstate, chatdispatch} = useContext(ChatContext);
  // console.log(chatstate.email, 'chatlist');

  return (
    <HeaderLayout>
      <View style={styles.screen}>
        {/* <Text style={styles.headerText}>Message</Text> */}
        <Text style={[styles.headerText]}>
          {state && state.userType == 'Mentor' ? 'Learners' : 'Mentors'}
        </Text>

        <View style={{flexDirection: 'row', marginTop: '3%'}}>
          {chatstate !== undefined && chatstate.length > 0 ? (
            chatstate.map(item => (
              <TouchableOpacity
                key={item.email}
                onPress={() => {
            
                  navigation.navigate('ViewIndividual', {
                    userData: item,
                  });
                }}
                activeOpacity={0.7}>
                <LinearGradient
                  colors={[AppColors.primarycolor, '#012437']}
                  start={{x: 0.4, y: 1.3}}
                  end={{x: 1, y: 0.5}}
                  style={styles.card}>
                  <Image style={styles.mentorDp} source={{uri: item.image}} />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.skill}>{item.industry}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))
          ) : (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                width: '100%',
                fontSize: 18,
              }}>
              You don't have any mentors curently 😐
            </Text>
          )}
        </View>
        <LinearGradient
          style={styles.menu}
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: -0.3, y: 1.8}}
          end={{x: 1, y: 1.5}}>
          <TouchableOpacity style={styles.chat}>
            <Text style={styles.btntxt}>Chats</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{flexDirection: 'row', marginTop: '3%'}}>
          {chatstate !== undefined && chatstate.length > 0 ? (
            chatstate.map(item => (
              <TouchableOpacity
                key={item.email}
                onPress={() => {
                  CreateMessagePath(state, item);
                  alert('path created');
                  navigation.navigate('ChatBox', {
                    userData: item,
                  });
                }}
                activeOpacity={0.7}>
                <LinearGradient
                  colors={[AppColors.primarycolor, '#012437']}
                  start={{x: 0.4, y: 1.3}}
                  end={{x: 1, y: 0.5}}
                  style={styles.card}>
                  <Image style={styles.mentorDp} source={{uri: item.image}} />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.skill}>{item.industry}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))
          ) : (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                width: '100%',
                fontSize: 18,
              }}>
              You don't have any mentors curently 😐
            </Text>
          )}
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
  AppBar: {
    flexDirection: 'row',
    paddingTop: '2%',
  },
  headerText: {
    width: '100%',
    alignSelf: 'center',
    paddingStart: '4%',
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  Mentors: {
    marginTop: '2%',
  },
  mentorDp: {
    width: Width / 4.5,
    height: Height / 11,
    borderRadius: 6,
  },
  name: {
    marginTop: '4%',
    fontFamily: 'Poppins-Regular',
    color: AppColors.FontsColor,
  },
  skill: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    marginTop: -5,
    color: AppColors.CardColor,
  },
  card: {
    marginStart: '6%',
    paddingHorizontal: 6,
    paddingTop: 13,
    alignItems: 'center',
    borderRadius: 6,
  },
  menu: {
    marginTop: '5%',
    width: '95%',
    marginStart: '3%',
    elevation: 5,
    borderRadius: 8,
    marginEnd: '3%',
    height: 40,
  },
  chat: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '75%',
    borderRadius: 6,
    marginVertical: 5,
    backgroundColor: AppColors.ActiveColor,
    marginHorizontal: Width / 2.7,
  },
  btntxt: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
  },
});

export default ChatList;
