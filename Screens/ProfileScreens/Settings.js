import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import AppColors from '../../Constaint/AppColors';
import {AuthContext} from '../../Navigations/AuthProvider';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ChangeDp} from '../../utils/fireBaseFunctions';
import TitleCard from '../../Componants/ProfileScreenComponents/TitleCard';
import {useNavigation} from '@react-navigation/native';
import { UserContext } from '../../App';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const Settings = props => {
  const {user, logout} = React.useContext(AuthContext);
  const [defaultdp, setdefaultdp] = useState(true);
  const navigation = useNavigation();
  const {state,dispatch} = useContext(UserContext);



  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            color: AppColors.FontsColor,
            fontFamily: 'Poppins-Regular',
            marginStart: Width / 3.3,
            fontSize: 22,
          }}>
          Settings
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={{height: '7%', marginTop: '25%'}}>
          <TitleCard firstText="Saved" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          style={{height: '7%', marginTop: '7%'}}>
          <TitleCard firstText="Edit profile" />
        </TouchableOpacity>
        <TouchableOpacity style={{height: '7%', marginTop: '7%'}}>
          <TitleCard firstText="Change password" />
        </TouchableOpacity>
        <TouchableOpacity style={{height: '7%', marginTop: '7%'}}>
          <TitleCard firstText="Terms and conditions" />
        </TouchableOpacity>
        <TouchableOpacity style={{height: '7%', marginTop: '7%'}}>
          <TitleCard firstText="Contact us" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{height: '7%', marginTop: '7%'}}>
          <TitleCard firstText="Logout" />
        </TouchableOpacity>
      </View>
      <View style={styles.dp}>
        
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: state&&state.image}}
          />
  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: '26%',
    fontSize: 25,
  },
  mainContainer: {
    height: Height / 1.65,
    marginVertical: Height / 9.8,
    paddingHorizontal: '2%',
    marginHorizontal: '2.5%',
    borderRadius: 10,
  },
  dp: {
    height: Height / 7.5,
    width: Width / 5.2,
    overflow: 'hidden',
    borderRadius: 200,
    marginStart: '35%',
    marginTop: '12%',
    position: 'absolute',
    backgroundColor: AppColors.CardColor,
  },
  camera: {
    position: 'absolute',
    backgroundColor: AppColors.infoFonts,
    padding: 5,
    marginTop: Height / 5.4,
    marginStart: Width / 1.7,
    borderRadius: 20,
  },
});

export default Settings;
