import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import CustomBtn from '../../Componants/CustomBtn';
import firestore from '@react-native-firebase/firestore';
import emailjs from 'emailjs-com';

const ForgotPassword = () => {
  const [email, setemail] = useState('');
  const navigation = useNavigation();
  var Name = '';

  const EmailOtp = () => {
    const OTP = Math.floor(Math.random() * 1000000 + 1);
    const msg = 'Your OTP for verification is ' + OTP;

    var templateParams = {
      name: Name,
      email: email,
      subject: 'OTP for account verification',
      message: msg,
    };
    emailjs.init('user_FR6AulWQMZry87FBzhKNu');
    emailjs
      .send('service_lfmmz8k', 'template_6lqwjap', templateParams)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(templateParams, 'send email');

    return OTP;
  };
  // console.log(Name);

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
            Forget Password
          </Text>
          <Text
            style={[styles.Text, {fontSize: 14, color: AppColors.infoFonts}]}>
            Please receive your password reset{' '}
          </Text>
          <Text
            style={[styles.Text, {fontSize: 14, color: AppColors.infoFonts}]}>
            instructions
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.inputHeader}>Email/Phone No.</Text>
          <TextInput
            style={styles.input}
            placeholder="Your email/Phone no."
            placeholderTextColor={AppColors.infoFonts}
            onChangeText={e => {
              setemail(e);
            }}
            value={email}
          />
          <CustomBtn
            Title="Send Password"
            style={{marginTop: 20}}
            onPress={async () => {
              const savedUser = await firestore()
                .collection('Users')
                .doc(email)
                .get();
              if (savedUser._data === undefined) {
                alert('Wrong mail Id');
              } else {
                Name = savedUser._data.name;
                var password = savedUser._data.password;
                var OTP = EmailOtp();
                alert('Please check your inbox');
                navigation.navigate('Otp', {
                  Otp: OTP,
                  Email: email,
                  Password: password,
                });
                setemail('');
              }
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={[
                styles.inputHeader,
                {fontSize: 12, alignSelf: 'center', marginTop: 20},
              ]}>
              I remember the password
            </Text>
          </TouchableOpacity>
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

export default ForgotPassword;
