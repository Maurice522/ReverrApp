import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import HeaderLayout from '../HomeScreens/HeaderLayout';
import Backbtn from '../../Componants/Backbtn';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomBtn from '../../Componants/CustomBtn';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const PlansDetails = props => {
  const PlansType = props.route.params.PlanType;
  const navigation = useNavigation();
  return (
    <HeaderLayout>
      <View style={styles.screen}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Backbtn
            IconSize={30}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.headerText}>Plans</Text>
        </View>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: 0, y: 1.3}}
          end={{x: 1, y: 0.5}}
          style={styles.TopCard}>
          <Text style={styles.type}>{PlansType}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.subtext}>1000/hr</Text>
          </View>
        </LinearGradient>
        <Text style={styles.description}>
          Whether you're looking to learn finance, get mentored, or join
          investing communities, we provide a one-stop solution.
        </Text>
        {PlansType !== 'Hourly' ? (
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: 0, y: 1.3}}
            end={{x: 1, y: 0.5}}
            style={styles.detailsCard}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: '12%',
                marginVertical: '2%',
              }}>
              <Icon name="comment-dots" color={AppColors.infoFonts} size={20} />
              <Text style={styles.text}>12 hour Chat support</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginEnd: '12%',
                marginVertical: '2%',
              }}>
              <Icon name="handshake" color={AppColors.infoFonts} size={20} />
              <Text style={styles.text}>One on one live sessions</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: '12%',
                marginVertical: '2%',
              }}>
              <Icon
                name="user-graduate"
                color={AppColors.infoFonts}
                size={20}
              />
              <Text style={styles.text}>Top class mentorship</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginEnd: '12%',
                marginVertical: '2%',
              }}>
              <Icon name="comment-dots" color={AppColors.infoFonts} size={20} />
              <Text style={styles.text}>Access to Reverr premium</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: '12%',
                marginVertical: '2%',
              }}>
              <Icon name="comment-dots" color={AppColors.infoFonts} size={20} />
              <Text style={styles.text}>Access to all Courses</Text>
            </View>
          </LinearGradient>
        ) : null}

        <CustomBtn
          style={{
            marginTop: PlansType === 'Hourly' ? Height / 2.6 : Height / 7.6,
          }}
          Title="Schedule"
        />
      </View>
    </HeaderLayout>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  headerText: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    marginStart: '4%',
  },
  TopCard: {
    alignItems: 'center',
    marginHorizontal: '4%',
    marginTop: '4%',
    borderRadius: 8,
    paddingVertical: '5%',
  },
  type: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  subContainer: {
    borderColor: AppColors.FontsColor,
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
    paddingHorizontal: 9,
    marginTop: '5%',
  },
  subtext: {
    color: AppColors.FontsColor,
  },
  description: {
    color: AppColors.infoFonts,
    marginTop: '6%',
    paddingHorizontal: '6%',
  },
  detailsCard: {
    marginHorizontal: '4%',
    borderRadius: 9,
    marginTop: '3%',
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: '3%',
  },
});
export default PlansDetails;
