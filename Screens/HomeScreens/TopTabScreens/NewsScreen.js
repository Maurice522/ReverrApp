import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import AppColors from '../../../Constaint/AppColors';
import {NewsData} from '../../../dummy-data/Dummy_News';
import TrendingNewsCard from '../../../Componants/HomeScreenComponants/NewsScreenComponants/TrendingNewsCard';
import NewsCard from '../../../Componants/HomeScreenComponants/NewsScreenComponants/NewsCard';
import Paginator from '../../../Componants/HomeScreenComponants/NewsScreenComponants/Paginator';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const NewsScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.screen}>
      <View>
        <View>
          <Text style={styles.heading}>Trending</Text>
        </View>
        <TrendingNewsCard
          data={NewsData}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
        />
        <Paginator data={NewsData} scrollX={scrollX} />
        <View style={{height: Height > 684 ? Height / 2.38 : Height / 2.4}}>
          <View>
            <Text style={styles.news}>News</Text>
          </View>
          <NewsCard data={NewsData} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  heading: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    paddingStart: 22,
    paddingTop: 5,
    fontSize: 16,
  },
  news: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginStart: '5%',
    marginTop: '3%',
  },
});
export default NewsScreen;
