import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HeaderLayout from '../HomeScreens/HeaderLayout';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import AppColors from '../../Constaint/AppColors';
import {paymentType} from '../../dummy-data/paymentType';
import {Directions} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Plans = () => {
  const navigation = useNavigation();
  const [column, setColumn] = useState(2);
  return (
    <HeaderLayout>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerText}>Plans</Text>
      </View>
      <View style={styles.screen}>
        <FlatList
          data={paymentType}
          numColumns={column}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PlanDetails', {PlanType: item.name});
              }}>
              <LinearGradient
                colors={[AppColors.primarycolor, '#012437']}
                start={{x: 0.5, y: 1.3}}
                end={{x: 1, y: 0.5}}
                style={styles.Card}>
                <Text style={styles.name}>{item.name}</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      </View>
    </HeaderLayout>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%',
  },
  headerText: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    marginStart: '4%',
  },
  Card: {
    marginHorizontal: 8,
    alignItems: 'center',
    borderRadius: 9,
    justifyContent: 'center',
    marginVertical: 5,
    height: Height / 5,
    width: Width / 2.5,
  },
  name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-SemiBold',
  },
});
export default Plans;
