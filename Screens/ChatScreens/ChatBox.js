import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import ShortUniqueId from 'short-unique-id';
import {UserContext} from '../../App';
import {ReciveMessage, SendMessage} from '../../utils/fireBaseFunctions';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const ChatBox = props => {
  const {state, dispatch} = useContext(UserContext);
  const userData = props.route.params.userData;
  //console.log();
  const [message, setmessage] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [Recive, setRecive] = useState();
  const navigation = useNavigation();

  const MakeCall = async () => {
    const udata = await firestore().collection('Users').doc(state.email).get();
    const meeting = udata._data.meeting;

    if (meeting != undefined && meeting.host != '') {
      return JoinCall();
    }
    const uid = new ShortUniqueId();
    const channelName = uid(12);
    const host = true;

    const data = {
      meeting: {
        channelName: channelName,
        host: state.email,
      },
    };

    await firestore().collection('Users').doc(state.email).update(data);
    await firestore().collection('Users').doc(userData.email).update(data);

    dispatch({type: 'MEETING', payload: data});

    navigation.navigate('videoCall', {
      token: await gettoken(channelName, host),
      userData: userData,
    });
  };

  const JoinCall = async () => {
    const data = await firestore().collection('Users').doc(state.email).get();
    const meeting = data._data.meeting;

    dispatch({type: 'MEETING', payload: data._data});

    const channelName = meeting.channelName;
    const host = meeting.host == state.email ? true : false;

    navigation.navigate('videoCall', {
      token: await gettoken(channelName, host),
      userData: userData,
    });
  };
  var token;

  async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data.channelName, data.host),
    });
    return response.json();
  }

  const gettoken = async (channelName, host) => {
    var data = {
      channelName,
      host,
    };
    token = await postData(
      'https://us-central1-reverr-25fb3.cloudfunctions.net/accessToken',
      data,
    ).then(data => {
      return data.token;
    });
    console.log(token);
    return token;
  };

  useEffect(() => {
    ReciveMessage(state, userData, setRecive);
  }, [Recive]);
  // console.log(Recive, 'msg');
  return (
    <LinearGradient
      style={styles.screen}
      colors={[AppColors.infoFonts, '#012437']}
      start={{x: 0.2, y: 1.1}}
      end={{x: 1.3, y: 0.6}}>
      <LinearGradient
        style={styles.AppBar}
        colors={[AppColors.infoFonts, AppColors.CardColor]}
        start={{x: -0, y: 1.3}}
        end={{x: 1, y: 0.5}}>
        <Backbtn
          style={styles.backbtn}
          IconSize={25}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image style={styles.dp} source={{uri: userData.image}} />
        <Text style={styles.Name}>{userData && userData.name}</Text>
        <TouchableOpacity onPress={MakeCall}>
          <Icon2
            name="phone-volume"
            size={20}
            color={AppColors.FontsColor}
            style={{transform: [{rotate: '-50deg'}]}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginStart: '12%'}}>
          <Icon2 name="ellipsis-v" size={20} color={AppColors.FontsColor} />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.MessageInput}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={m => {
              setmessage(m);
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: AppColors.CardColor,
              padding: 5,
              borderRadius: 5,
            }}
            onPress={() => {
              SendMessage(state, userData, message);
              setmessage('');
            }}>
            <Icon name="send" color={AppColors.FontsColor} size={25} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: AppColors.CardColor,
            padding: 8,
            borderRadius: 5,
            marginStart: '3.5%',
          }}>
          <Icon2 name="camera" color={AppColors.FontsColor} size={23} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={Recive}
          renderItem={({item}) => (
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                height: 'auto',
              }}>
              <Text
                style={{
                  color: item.sendBy == userData.email ? 'red' : 'yellow',
                  width: '30%',
                  justifyContent: 'center',
                  borderRadius: 15,
                  padding: 10,
                  marginTop: '2%',
                  backgroundColor: AppColors.CardColor,
                  marginStart: item.sendBy == userData.email ? '65%' : '2%',
                }}>
                {item.msg == '' ? null : item.msg}
              </Text>
              <Text style={{paddingStart: '2%'}}>{item.createdAt}</Text>
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  AppBar: {
    backgroundColor: AppColors.CardColor,
    paddingVertical: '1.5%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dp: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginStart: '5%',
  },
  backbtn: {
    width: 30,
    height: 30,
  },
  Name: {
    width: Width / 2,
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Bold',
    marginStart: '6%',
  },
  MessageInput: {
    bottom: 5,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'absolute',
    width: '85%',
    height: 40,
    marginStart: '2%',
  },
  input: {
    paddingStart: 8,
    width: '88%',
    paddingVertical: 8,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});

export default ChatBox;
