import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {proData} from '../../dummy-data/ProFeatures';
import AppColors from '../../Constaint/AppColors';
import {premiumeData} from '../../dummy-data/PremiumeFeature';

const Height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const PremiumeSubscription = () => {
  return (
    <View style={{height: Height / 2.8}}>
      <FlatList
        data={premiumeData}
        renderItem={({item}) => (
          <View style={styles.list}>
            {item.icon}
            <View style={styles.texts}>
              <Text style={{color: AppColors.FontsColor}}>{item.title}</Text>
              <Text style={{color: AppColors.infoFonts}}>{item.sub}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    marginTop: '4%',
    paddingHorizontal: '10%',
  },
  texts: {
    marginStart: '8%',
  },
});
export default PremiumeSubscription;
