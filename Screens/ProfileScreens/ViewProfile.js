import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  import AppColors from '../../Constaint/AppColors';
  import Backbtn from '../../Componants/Backbtn';
  import Icon from 'react-native-vector-icons/FontAwesome5';
  import Ionic from 'react-native-vector-icons/Ionicons';
  import {useNavigation} from '@react-navigation/native';

  const Width = Dimensions.get('screen').width;
  const Height = Dimensions.get('screen').height;
  
  const ViewIndividuaProfile = props => {
    const state = props.route.params.userData;
    const navigation = useNavigation();
    // const {state, dispatch} = useContext(UserContext);
    // console.log(state.education.map(ed => ed));
  
    return (
        <ScrollView style={styles.screen}>
          <View style={styles.header}>
            <View style={{width: '40%'}}>
              <Backbtn
                IconSize={30}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <Text
              style={{
                color: AppColors.FontsColor,
                fontFamily: 'Poppins-Regular',
                marginStart: Width / 30,
                fontSize: 22,
              }}>
              Profile
            </Text>
          </View>
          <View style={styles.mainContainer}>
            
            <View style={{height: '7%'}}>
              <Text
                style={[
                  styles.text,
                  {
                    width: '100%',
                    textAlign: 'center',
                    marginLeft: 10,
                    fontSize: 18,
                    textTransform: 'capitalize',
                  },
                ]}>
                {state && state.name}
              </Text>
            </View>
            <View
              style={{
                height: '17%',
                marginTop: '2%',
                borderBottomColor: AppColors.FontsColor,
                borderBottomWidth: 1,
              }}>
              <Text style={[styles.text, {fontSize: 18}]}>About</Text>
              <Text style={styles.about}>{state && state.about}</Text>
            </View>
            <View
              style={{
                height: '9%',
                flexDirection: 'row',
                marginTop: '2%',
                alignItems: 'center',
                paddingBottom: '4%',
                justifyContent: 'space-between',
                borderBottomColor: AppColors.FontsColor,
                borderBottomWidth: 1,
              }}>
              <Text style={[styles.text, {fontSize: 18}]}>Industry</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={[styles.text, {fontSize: 18, paddingRight: '5%'}]}>
                  {state && state.industry}
                </Text>
                <Icon
                  name="angle-right"
                  size={25}
                  color={AppColors.FontsColor}
                  style={{paddingRight: '2%', marginTop: '3%'}}
                />
              </View>
            </View>
            <View style={styles.CompanyDetails}>
              <Text style={[styles.text, {fontSize: 18}]}>Experience</Text>
              <Text style={[styles.txt, {width: Width / 2}]}>
                {state && state.experience&&state.experience.length>0&&state.experience.map(ex=>ex)}
              </Text>
            </View>
            <View style={[styles.CompanyDetails, {height: Height / 9}]}>
              <Text style={[styles.text, {fontSize: 18}]}>Skills</Text>
              <Text style={[styles.txt, {width: Width / 2}]}>
                {state && state.skills&&state.skills.length>0&&state.skills.map(sk=>sk)}
              </Text>
            </View>
            <View style={[styles.CompanyDetails]}>
              <Text style={[styles.text, {fontSize: 18}]}>Education</Text>
              <Text style={[styles.txt]}>
              {state && state.education&&state.education.length>0&&state.education.map(ed=>ed)}
              </Text>
            </View>
          </View>
          <View style={styles.dp}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: state.image}}
            />
          </View>
        </ScrollView>
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
      height: Height / 1.45,
      marginVertical: Height / 9.8,
      paddingHorizontal: '2%',
      marginHorizontal: '2.5%',
      borderRadius: 10,
      marginTop:'35%'
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
    topIcons: {
      flexDirection: 'row',
      paddingTop: '2%',
      marginHorizontal: '1%',
    },
    text: {
      color: AppColors.FontsColor,
      marginTop: Height / 82,
      fontFamily: 'Poppins-Regular',
      fontSize: 13,
    },
    CompanyDetails: {
      width: '100%',
      marginTop: '2%',
      borderBottomColor: AppColors.FontsColor,
      borderBottomWidth: 1,
    },
    title: {
      color: AppColors.FontsColor,
      fontFamily: 'Poppins-Regular',
    },
    txt: {
      color: AppColors.infoFonts,
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
      paddingBottom: '3%',
    },
    about: {
      color: AppColors.infoFonts,
    },
  });
  
  export default ViewIndividuaProfile;
  