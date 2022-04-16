import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MentorScreen from '../Screens/MentorScreens/MentorScreen';
import LearnScreen from '../Screens/LearnScreens/LearnScreen';
import IndividuaProfile from '../Screens/ProfileScreens/IndividuaProfile';
import Settings from '../Screens/ProfileScreens/Settings';
import MentorProfile from '../Screens/ProfileScreens/MentorProfile';
import ChatList from '../Screens/ChatScreens/ChatList';
import ChatBox from '../Screens/ChatScreens/ChatBox';
import GroupChatBox from '../Screens/ChatScreens/GroupChatBox';
import EditProfile from '../Screens/ProfileScreens/EditProfile';
import ArticalDetailsScreen from '../Screens/HomeScreens/TopTabScreens/ArticalDetailsScreen';
import MentorsList from '../Screens/MentorScreens/MentorsList';
import ArticleScreen from '../Screens/HomeScreens/TopTabScreens/ArticleScreen';
import MentorDetails from '../Screens/MentorScreens/MentorDetails';
import FundingScreen from '../Screens/FundingScreens/FundingScreen';
import Dashboard from '../Screens/HomeScreens/Dashboard';
import ApplyFunding from '../Screens/FundingScreens/ApplyFunding';
import Plans from '../Screens/MentorScreens/Plans';
import ViewIndividuaProfile from '../Screens/ProfileScreens/ViewProfile'

import {VideoCall} from '../Screens/videocall/videoCall';

import PlansDetails from '../Screens/MentorScreens/PlansDetails';

import Subscription from '../Screens/SubscriptionScreen/Subscription';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashBoard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Individual"
        component={IndividuaProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewIndividual"
        component={ViewIndividuaProfile}
        options={{headerShown: false}}
      />  
      <Stack.Screen
        name="Mentor"
        component={MentorProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={ChatList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatBox"
        component={ChatBox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="videoCall"
        component={VideoCall}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GroupChatBox"
        component={GroupChatBox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ArticalDetails"
        component={ArticalDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Artical"
        component={ArticleScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Subscription"
        component={Subscription}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const MentorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FindMentor"
        component={MentorScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="List"
        component={MentorsList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MentorsProfile"
        component={MentorDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Plans"
        component={Plans}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlanDetails"
        component={PlansDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const FundingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FundingScreen"
        component={FundingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Apply"
        component={ApplyFunding}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const LearnStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Learn"
        component={LearnScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
