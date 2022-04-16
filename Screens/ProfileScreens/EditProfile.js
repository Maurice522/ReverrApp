import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import AppColors from '../../Constaint/AppColors';
import {AuthContext} from '../../Navigations/AuthProvider';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ChangeDp} from '../../utils/fireBaseFunctions';
import TitleCard from '../../Componants/ProfileScreenComponents/TitleCard';
import {useNavigation} from '@react-navigation/native';
import EditCard from '../../Componants/ProfileScreenComponents/EditCard';
import firestore from '@react-native-firebase/firestore';
import CustomBtn from '../../Componants/CustomBtn';
import {UserContext} from '../../App';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const EditProfile = () => {
  const {state, dispatch} = useContext(UserContext);
  const {user, logout} = React.useContext(AuthContext);

  const [Name, setName] = useState(state && state.name);
  const [About, setAbout] = useState(
    state && state.about == '' ? '>/s<' : state.about,
  );
  const [Industry, setIndustry] = useState(
    state && state.industry == '' ? '>/s<' : state.industry,
  );
  const [loading, setLoading] = useState(false);

  const [ex1, setEx1] = useState(
    state && state.experience && state.experience.length > 0
      ? state.experience[0]
      : '>/s<',
  );
  const [ex2, setEx2] = useState(
    state && state.experience && state.experience.length > 1
      ? state.experience[1]
      : '>/s<',
  );
  const [ex3, setEx3] = useState(
    state && state.experience && state.experience.length > 2
      ? state.experience[2]
      : '>/s<',
  );

  const [sk1, setSk1] = useState(
    state && state.skills && state.skills.length > 0 ? state.skills[0] : '>/s<',
  );
  const [sk2, setSk2] = useState(
    state && state.skills && state.skills.length > 1 ? state.skills[1] : '>/s<',
  );
  const [sk3, setSk3] = useState(
    state && state.skills && state.skills.length > 2 ? state.skills[2] : '>/s<',
  );
  // const [sk4,setSk4] = useState(state&&state.skills&&state.skills>2?state.skills[3]:'>/s<');
  // const [sk5,setSk5] = useState(state&&state.skills&&state.skills>2?state.skills[4]:'>/s<');

  const [ed1, setEd1] = useState(
    state && state.education && state.education.length > 0
      ? state.education[0]
      : '>/s<',
  );
  const [ed2, setEd2] = useState(
    state && state.education && state.education.length > 1
      ? state.education[1]
      : '>/s<',
  );
  const [ed3, setEd3] = useState(
    state && state.education && state.education.length > 2
      ? state.education[2]
      : '>/s<',
  );

  const navigation = useNavigation();

  const saveChanges = async () => {
    const Experience = [
      ex1 == '>/s<' ? '' : ex1,
      ex2 == '>/s<' ? '' : ex2,
      ex3 == '>/s<' ? '' : ex3,
    ];
    const Skills = [
      sk1 == '>/s<' ? '' : sk1,
      sk2 == '>/s<' ? '' : sk2,
      sk3 == '>/s<' ? '' : sk3,
    ]; //sk4,sk5
    const Education = [
      ed1 == '>/s<' ? '' : ed1,
      ed2 == '>/s<' ? '' : ed2,
      ed3 == '>/s<' ? '' : ed3,
    ];

    const data = {
      name: Name,
      experience: Experience,
      skills: Skills,
      about: About,
      industry: Industry,
      education: Education,
    };
    await firestore().collection('Users').doc(state.email).update(data);
    dispatch({type: 'UPDATE', payload: data});
  };
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
            marginStart: Width / 4.5,
            fontSize: 22,
          }}>
          Edit Profile
        </Text>
      </View>
      <ScrollView style={styles.mainContainer}>
        <TextInput
          value={Name}
          style={styles.name}
          onChangeText={n => {
            setName(n);
          }}
        />
        <EditCard
          Title="About"
          onChangeText={a => {
            setAbout(a);
          }}
          value={About == '>/s<' ? 'Enter About' : About}
        />
        <TextInput
          value={Industry == '>/s<' ? 'Enter Your Industry' : Industry}
          style={[
            styles.name,
            {marginTop: Height / 90, color: AppColors.infoFonts},
          ]}
          onChangeText={i => {
            setIndustry(i);
          }}
        />
        <EditCard
          Title="Experience"
          onChangeText={e => {
            setEx1(e);
          }}
          value={ex1 == '>/s<' ? 'Enter Experience' : ex1}
        />
        <EditCard
          onChangeText={e => {
            setEx2(e);
          }}
          value={ex2 == '>/s<' ? 'Enter Experience' : ex2}
        />
        <EditCard
          onChangeText={e => {
            setEx3(e);
          }}
          value={ex3 == '>/s<' ? 'Enter Experience' : ex3}
        />
        <EditCard
          Title="Skills"
          onChangeText={e => {
            setSk1(e);
          }}
          value={sk1 == '>/s<' ? 'Enter Skill' : sk1}
        />
        <EditCard
          onChangeText={e => {
            setSk2(e);
          }}
          value={sk2 == '>/s<' ? 'Enter Skill' : sk2}
        />
        <EditCard
          onChangeText={e => {
            setSk3(e);
          }}
          value={sk3 == '>/s<' ? 'Enter Skill' : sk3}
        />
        {/* <EditCard
         
         onChangeText={e => {
           setSk4(e);
         }}
         value={sk4 == '>/s<' ? 'Enter Skill' :  sk4}
       />
       <EditCard
         
         onChangeText={e => {
           setSk5(e);
         }}
         value={sk5 == '>/s<' ? 'Enter Skill' :  sk5}
       /> */}
        <EditCard
          Title="Education"
          onChangeText={e => {
            setEd1(e);
          }}
          value={ed1 == '>/s<' ? 'Enter Education' : ed1}
        />
        <EditCard
          onChangeText={e => {
            setEd2(e);
          }}
          value={ed2 == '>/s<' ? 'Enter Education' : ed2}
        />
        <EditCard
          onChangeText={e => {
            setEd3(e);
          }}
          value={ed3 == '>/s<' ? 'Enter Education' : ed3}
        />
      </ScrollView>
      <CustomBtn
        Title="Save Changes"
        onPress={() => saveChanges()}
        style={{backgroundColor: 'blue', marginTop: 15}}
      />
      <View style={styles.dp}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{uri: state && state.image}}
        />
      </View>
      <ActivityIndicator
        animating={loading}
        style={styles.loader}
        size="large"
        color="white"
      />

      <TouchableOpacity
        style={styles.camera}
        onPress={() => {
          setLoading(true);
          ChangeDp(loading, setLoading, dispatch);
        }}>
        <Icon name="camera" size={15} color="black" />
      </TouchableOpacity>
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
    display: 'flex',
    flex: 1,
    marginTop: '30%',
  },
  dp: {
    height: Height / 8.9,
    width: Width / 8,
    overflow: 'hidden',
    borderRadius: 200,
    marginStart: '35%',
    marginTop: '15%',
    position: 'absolute',
    backgroundColor: AppColors.CardColor,
  },
  camera: {
    position: 'absolute',
    backgroundColor: AppColors.infoFonts,
    padding: 5,
    marginTop: Height / 5.2,
    marginStart: Width / 1.8,
    borderRadius: 20,
  },
  loader: {
    position: 'absolute',
    marginTop: Height / 8.2,
    marginStart: Width / 2.15,
  },
  name: {
    backgroundColor: AppColors.CardColor,
    height: Height / 24,
    paddingBottom: 4.5,
    fontFamily: 'Poppins-Regular',
    color: AppColors.infoFonts,
    paddingStart: 9,
    marginTop: Height / 13,
    borderRadius: 10,
    width: '99%',
  },
});

export default EditProfile;
