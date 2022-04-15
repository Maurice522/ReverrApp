import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AppColors from '../../../Constaint/AppColors';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const TrendingNewsCard = props => {
  return (
    <View style={{alignItems: 'center', marginTop: '2%', paddingBottom: '5%'}}>
      <FlatList
        data={props.data}
        horizontal
        pagingEnabled
        onScroll={props.onScroll}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <ImageBackground style={{flex: 1}} source={{uri: item.image}}>
              <View style={styles.title}>
                <Text
                  style={{
                    color: AppColors.FontsColor,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {item.title}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 10,
    marginEnd: 10,
    width: Width / 1.2,
    height: Height > 684 ? Height / 4 : Height / 5,
    overflow: 'hidden',
    borderRadius: 20,
  },
  title: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '40%',
    paddingVertical: 5,
    alignItems: 'center',
    top: Height > 684 ? 145 : 90,
  },
});

export default TrendingNewsCard;
