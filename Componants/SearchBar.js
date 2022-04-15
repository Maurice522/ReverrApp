import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppColors from '../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '1%'}}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Search" />
        <Icon name="search" size={25} color={AppColors.FontsColor} />
      </View>
      <TouchableOpacity>
        <Image
          style={styles.filter}
          source={require('../assets/Images/filter.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 45,
    width: '90%',
    borderRadius: 6,
  },
  container: {
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 6,
    height: 40,
    width: '80%',
    backgroundColor: AppColors.inputFieldColor,
    marginStart: '4%',
    flexDirection: 'row',
  },
  filter: {
    tintColor: AppColors.FontsColor,
    width: 25,
    height: 25,
    marginStart: '20%',
  },
});

export default SearchBar;
