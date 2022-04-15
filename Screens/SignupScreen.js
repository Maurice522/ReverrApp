import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import AppColors from '../Constaint/AppColors';
import InputField from '../Componants/InputField';
import CustomBtn from '../Componants/CustomBtn';
import Backbtn from '../Componants/Backbtn';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import emailjs from 'emailjs-com';

const SignupScreen = props => {
  var [isSecure1, setisSecure1] = useState(true);
  var [isSecure2, setisSecure2] = useState(true);
  const [name, setname] = useState('');
  const [nameerror, setnameerror] = useState(false);
  const [email, setemail] = useState('');
  const [emailerror, setemailerror] = useState(false);
  const [password, setpassword] = useState('');
  const [passerror, setpasserror] = useState(false);
  const [ConfermPass, setConfermPass] = useState('');
  const [confermpasserror, setconfermpasserror] = useState(false);
  const [mobile, setmobile] = useState('');
  const [moberror, setmoberror] = useState(false);
  const navigation = useNavigation();

  // Get UserType from UserSelectScreen
  const UserType = props.route.params.UserType;

  const data = {
    userType: UserType,
    Name: name,
    Email: email,
    Password: password,
    Mobile: mobile,
  };

  //console.log(data)
  const IsEmpty = async () => {
    if (name === '') {
      setnameerror(true);
    } else {
      if (email === '') {
        setemailerror(true);
      } else {
        if (password == '') {
          setpasserror(true);
        } else {
          if (ConfermPass == '') {
            setconfermpasserror(true);
          } else {
            if (mobile == '') {
              setmoberror(true);
            } else {
              if (password != ConfermPass) {
                alert('Password not matched!!');
              } else {
                const savedUser = await firestore()
                  .collection('Users')
                  .doc(email)
                  .get();
                if (savedUser._data != undefined) {
                  alert('user already exists with that email');
                } else {
                  var OTP = EmailOtp();
                  alert('Please check your inbox');
                  navigation.navigate('emailVerify', {
                    OTP: OTP,
                    Email: email,
                    Password: password,
                    Name: name,
                    Mobile: mobile,
                    UserType: UserType,
                  });
                  setname('');
                  setemail('');
                  setpassword('');
                  setConfermPass('');
                  setmobile('');
                }
              }
            }
          }
        }
      }
    }
  };

  const EmailOtp = () => {
    const OTP = Math.floor(Math.random() * 1000000 + 1);
    const msg = 'Your OTP for verification is ' + OTP;

    var templateParams = {
      name: data.Name,
      email: data.Email,
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
        <ScrollView>
          <View style={styles.pageInfo}>
            <Text
              style={[
                styles.Text,
                {fontSize: 24, color: AppColors.FontsColor, marginBottom: 5},
              ]}>
              Signup
            </Text>
            <Text
              style={[styles.Text, {fontSize: 14, color: AppColors.infoFonts}]}>
              Enter your basic information below{' '}
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <InputField
              iconName="user"
              placeholder="Your Name"
              size={35}
              value={name}
              error={nameerror}
              onChangeText={n => {
                setname(n);
                if (n != '') {
                  setnameerror(false);
                }
              }}
              style={styles.inputstyle}
              Title="Name"
            />
            <InputField
              iconName="envelope"
              placeholder="Enter email"
              size={25}
              value={email}
              error={emailerror}
              onChangeText={e => {
                setemail(e.toLowerCase());
                if (e != '') {
                  setemailerror(false);
                }
              }}
              style={styles.inputstyle}
              Title="Email Adress"
            />
            <InputField
              iconName="lock"
              size={35}
              value={password}
              error={passerror}
              onChangeText={p1 => {
                setpassword(p1);
                if (p1 != '') {
                  setpasserror(false);
                }
              }}
              secureTextEntry={isSecure1}
              showIcon={isSecure1 ? 'eye-slash' : 'eye'}
              Eyelick={() => {
                setisSecure1(prev => !prev);
              }}
              showIconolor={AppColors.infoFonts}
              showIconsize={25}
              style={styles.inputstyle}
              placeholder="Create password"
              Title="Password"
            />
            <InputField
              iconName="lock"
              size={35}
              value={ConfermPass}
              error={confermpasserror}
              onChangeText={p2 => {
                setConfermPass(p2);
                if (p2 !== '') {
                  setconfermpasserror(false);
                }
              }}
              style={styles.inputstyle}
              secureTextEntry={isSecure2}
              showIcon={isSecure2 ? 'eye-slash' : 'eye'}
              Eyelick={() => {
                setisSecure2(prev => !prev);
              }}
              showIconolor={AppColors.infoFonts}
              showIconsize={25}
              placeholder="**********"
              Title=" Confirm Password"
            />
            <InputField
              iconName="mobile"
              placeholder="Your Mobile Number"
              size={45}
              value={mobile}
              error={moberror}
              onChangeText={m => {
                setmobile(m);
                if (m != '') {
                  setmoberror(false);
                }
              }}
              maxLength={10}
              style={styles.inputstyle}
              keyboardType="number-pad"
              Title="Mobile Number"
            />
            <CustomBtn
              Title="Create Account"
              onPress={() => IsEmpty()}
              style={{marginTop: 10}}
            />
            <View style={styles.signuplink}>
              <Text
                style={{
                  color: AppColors.infoFonts,
                  fontFamily: 'Poppins-Regular',
                }}>
                Already a user?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text
                  style={{
                    color: AppColors.FontsColor,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Login Now!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
    marginTop: 10,
    marginStart: 30,
  },
  Text: {
    fontFamily: 'Poppins-Regular',
  },
  inputstyle: {
    marginTop: 0,
    marginBottom: -10,
  },
  signuplink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%',
    justifyContent: 'center',
  },
});

export default SignupScreen;
