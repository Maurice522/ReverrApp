import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import Backbtn from '../../Componants/Backbtn';
import CustomBtn from '../../Componants/CustomBtn';

const OtpScreen = props => {
  const navigation = useNavigation();
  const [otp, setOtp] = React.useState('');
  const Otp = props.route.params.Otp;
  const Email = props.route.params.Email;
  const Password = props.route.params.Password;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <View style={{marginTop: 10}}>
          <Backbtn
            IconSize={30}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.pageInfo}>
          <Text
            style={[
              styles.Text,
              {fontSize: 24, color: AppColors.FontsColor, marginBottom: 13},
            ]}>
            Confirmation
          </Text>
          <Text
            style={[styles.Text, {fontSize: 14, color: AppColors.infoFonts}]}>
            Please enter the vertification code{' '}
          </Text>
          <Text
            style={[styles.Text, {fontSize: 14, color: AppColors.infoFonts}]}>
            from the sms we just send you
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.inputHeader}>OTP</Text>
          <TextInput
            style={styles.input}
            placeholder="code"
            placeholderTextColor={AppColors.infoFonts}
            onChangeText={o => {
              setOtp(o);
            }}
            maxLength={6}
            keyboardType="number-pad"
          />
          <CustomBtn
            Title="Confirm"
            style={{marginTop: 20}}
            onPress={() => {
              if (Otp != otp) {
                alert('wrong otp');
              } else {
                navigation.navigate('Reset', {
                  EmailID: Email,
                  Password: Password,
                });
              }
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <Text
              style={{
                color: AppColors.infoFonts,
                fontFamily: 'Poppins-Regular',
                fontSize: 13,
              }}>
              Don’t get it?{' '}
            </Text>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginStart: -20,
              }}>
              <Text style={[styles.inputHeader, {fontSize: 13}]}>
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  pageInfo: {
    marginTop: 60,
    marginStart: 30,
  },
  Text: {
    fontFamily: 'Poppins-Regular',
  },
  inputHeader: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: 22,
    fontSize: 16,
  },
  container: {
    marginTop: 80,
  },
  input: {
    fontSize: 14,
    marginStart: 20,
    paddingStart: 10,
    color: AppColors.FontsColor,
    paddingTop: 0,
    fontFamily: 'Poppins-Regular',
    backgroundColor: AppColors.inputFieldColor,
    marginTop: 5,
    borderRadius: 10,
    paddingBottom: 0,
    height: 50,
    width: '90%',
  },
});

export default OtpScreen;
