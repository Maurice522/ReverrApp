import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppColors from '../../Constaint/AppColors';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ShowCalander} from '../../utils/calanderFunctionality';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

const CalanderScreen = props => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [week1, setWeek1] = useState([]);
  const [week2, setWeek2] = useState([]);
  const [week3, setWeek3] = useState([]);
  const [week4, setWeek4] = useState([]);
  const [week5, setWeek5] = useState([]);
  const [dayname, setDayname] = useState([
    ' S',
    ' M',
    ' T',
    ' W',
    'Th',
    ' F',
    'Sa',
  ]);
  const [dates, setDates] = useState([]);
  useEffect(() => {
    ShowCalander(setMonth, setYear, setDates);
    generateDates();
  }, [month]);

  const generateDates = () => {
    const date = dates.map(x => x);
    //let temp = [...date[0]];
  };
  return (
    <View
      style={{
        width: '100%',
        height: Height / 2.3,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        backgroundColor: AppColors.poupopbg,
      }}>
      <TouchableOpacity onPress={props.onClose} style={styles.close}>
        <Icon name="times" size={25} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon2 name="arrow-back-circle-outline" size={28} color="black" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>{month}</Text>
          <Text style={styles.txt}>{year}</Text>
        </View>
        <TouchableOpacity>
          <Icon2 name="arrow-forward-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', marginStart: '9%', marginTop: '3%'}}>
        <FlatList
          data={dayname}
          horizontal
          renderItem={({item}) => (
            <View key={item} style={styles.daysName}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
        />
      </View>
      <View
        style={{
          width: '83%',
          height: '60%',
          flexDirection: 'row',
          marginTop: '3%',
        }}>
        {/* {dates && dates.map(item => console.log(item))} */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  close: {
    left: Width / 1.07,
    top: 2,
  },
  header: {
    flexDirection: 'row',
    width: Width,
    justifyContent: 'space-evenly',
  },
  arrow: {
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 50,
  },
  txt: {
    color: 'black',
    marginEnd: 10,
    fontSize: 18,
    fontFamily: 'Poppins-semibold',
  },
  daysName: {
    flexDirection: 'row',
    marginStart: Width / 14,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
});
export default CalanderScreen;
