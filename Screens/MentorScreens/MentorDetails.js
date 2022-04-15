import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppColors from '../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CustomBtn from '../../Componants/CustomBtn';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MentorDetails = props => {
  const mentorData = props.route.params.profileDetails;
  const navigation = useNavigation();
  const [about, setAbout] = useState(true);
  const [exp, setExp] = useState(false);
  const [plan, setplan] = useState(false);

  // console.log(mentorData);
  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
          justifyContent: 'space-between',
        }}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Icon size={27} name="heart" color="red" style={{marginRight: '8%'}} />
      </View>
      <View style={styles.dp}>
        <Image
          style={{
            width: 250,
            height: 250,
            alignSelf: 'center',
          }}
          source={
            mentorData.image == ''
              ? require('../../assets/Images/mdp.png')
              : {uri: mentorData.image}
          }
        />
      </View>
      <LinearGradient
        colors={[AppColors.primarycolor, '#012437']}
        start={{x: 0, y: 1.3}}
        end={{x: 1, y: 0.5}}
        style={styles.Card}>
        <Text style={styles.Name}>{mentorData.name}</Text>
        <Text style={styles.skill}>
          {mentorData.skills == '' ? 'Not Avilable' : mentorData.skills}
        </Text>
      </LinearGradient>

      <View style={styles.details}>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: 0, y: 1.3}}
          end={{x: 1, y: 0.5}}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderRadius: 6,
            marginTop: Height / 13,
          }}>
          <Text style={styles.txt1}>Industry</Text>
          <Text style={styles.txt2}>Fintech</Text>
        </LinearGradient>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: 0, y: 1.3}}
          end={{x: 1, y: 0.5}}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            marginStart: 10,
            borderRadius: 6,
            marginTop: Height / 13,
          }}>
          <Text style={styles.txt1}>Appoinment</Text>
          <Text style={styles.txt2}>$1000/Hr</Text>
        </LinearGradient>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: 0, y: 1.3}}
          end={{x: 1, y: 0.5}}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            marginStart: 10,
            borderRadius: 6,
            marginTop: Height / 13,
          }}>
          <Text style={styles.txt1}>Rating</Text>
        </LinearGradient>
      </View>
      <LinearGradient
        colors={[AppColors.primarycolor, '#012437']}
        start={{x: 0, y: 1.3}}
        end={{x: 1, y: 0.5}}
        style={styles.menu}>
        <TouchableOpacity
          onPress={() => {
            setAbout(true);
            setplan(false);
            setExp(false);
          }}
          activeOpacity={0.7}
          style={[
            styles.about,
            {backgroundColor: about ? AppColors.FontsColor : null},
          ]}>
          <Text style={{color: about ? 'black' : AppColors.FontsColor}}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setExp(true);
            setAbout(false);
            setplan(false);
          }}
          activeOpacity={0.7}
          style={[
            styles.about,
            {backgroundColor: exp ? AppColors.FontsColor : null},
          ]}>
          <Text style={{color: exp ? 'black' : AppColors.FontsColor}}>
            Experience
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setplan(true);
            setAbout(false);
            setExp(false);
          }}
          activeOpacity={0.7}
          style={[
            styles.about,
            {backgroundColor: plan ? AppColors.FontsColor : null},
          ]}>
          <Text style={{color: plan ? 'black' : AppColors.FontsColor}}>
            plan
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      {about ? (
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text
            style={{color: AppColors.infoFonts, fontFamily: 'Poppins-Regular'}}>
            Market Research Mentor is the terminal where all industrial,
            commercial and profitmaking venture will get the best research
            reports of the market in all sectors like automotive, electronics,
            pharmaceuticals and healthcare, food and beverages etc.
          </Text>
        </View>
      ) : exp ? (
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text
            style={{color: AppColors.infoFonts, fontFamily: 'Poppins-Regular'}}>
            Experience
          </Text>
        </View>
      ) : plan ? (
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text
            style={{color: AppColors.infoFonts, fontFamily: 'Poppins-Regular'}}>
            plan
          </Text>
        </View>
      ) : null}
      <CustomBtn
        Title="Schedule"
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Plans');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  Card: {
    position: 'absolute',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '1%',
    top: '40%',
    alignSelf: 'center',
  },
  dp: {
    backgroundColor: AppColors.infoFonts,
    borderRadius: 300,
    width: Width / 1.4,
    alignSelf: 'center',
    height: Height / 3,
  },
  Name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 26,

    // backgroundColor: 'red',
  },
  skill: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txt1: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  txt2: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  menu: {
    backgroundColor: AppColors.CardColor,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: '3%',
    paddingHorizontal: 10,
  },
  about: {
    backgroundColor: AppColors.FontsColor,
    paddingHorizontal: 25,
    borderRadius: 6,
    marginStart: 10,
    paddingVertical: 5,
  },
  btn: {
    paddingHorizontal: '35%',
  },
});
export default MentorDetails;
