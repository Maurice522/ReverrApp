import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import CustomMenuBar from '../../Componants/CustomMenuBar';
import ProSubscription from '../../Componants/SubsComponents/ProSubscription';
import PremiumeSubscription from '../../Componants/SubsComponents/PremiumeSubscription';
import PricingCard from '../../Componants/SubsComponents/PricingCard';
import {pricingData} from '../../dummy-data/pricingData';

const Subscription = () => {
  const navigation = useNavigation();
  const [pro, setPro] = useState(false);
  const [premiume, setPremiume] = useState(true);
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.text}>Subscription</Text>
      </View>
      <View style={styles.MainContainer}>
        <CustomMenuBar
          Item1="Pro"
          Item2="Premiume"
          active1={pro}
          ClickOnItem1={() => {
            setPro(true);
            setPremiume(false);
          }}
          ClickOnItem2={() => {
            setPremiume(true);
            setPro(false);
          }}
          active2={premiume}
        />
        {pro ? <ProSubscription /> : premiume ? <PremiumeSubscription /> : null}
        <View style={{paddingVertical: '8%'}}>
          <PricingCard PricingData={pricingData} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  MainContainer: {
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: '8%',
  },
});
export default Subscription;
