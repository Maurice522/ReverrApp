import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Header from '../../Componants/HomeScreenComponants/Header';
import AppColors from '../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import CalanderScreen from '../CalanderScreen/CalanderScreen';
import ModelView from '../../Componants/ModelView';
import {UserContext} from '../../App';

const HeaderLayout = props => {
  const {state, dispatch} = useContext(UserContext);
  const [modelVisible, setModelVisible] = useState(false);

  const navigation = useNavigation();
  //console.log(state.image);
  return (
    <View style={styles.screen}>
      <Header
        onPressDp={() => {
          navigation.navigate(state && state.userType, {Data: state});
        }}
        onPressCalander={() => {
          setModelVisible(true);
        }}
        onPressNoti={() => {
          console.log('Notification');
        }}
        onPressChat={() => {
          navigation.navigate('Chat');
        }}
        DpUrl={state && state.image}
      />
      <ModelView
        ShowModal={modelVisible}
        onCloseModal={() => {
          setModelVisible(false);
        }}>
        <CalanderScreen
          onClose={() => {
            setModelVisible(false);
          }}
        />
      </ModelView>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
});

export default HeaderLayout;
