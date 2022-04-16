import React, {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {StatusBar} from 'react-native';
import {AuthProvider} from './Navigations/AuthProvider';
import {Provider} from 'react-redux';
import Routes from './Navigations/Routes';
import AppColors from './Constaint/AppColors';
import {store} from './Redux/store';
import {reducer, intialState} from './Redux/userReducer';
import {chatreducer, chatintialState} from './Redux/chatReducer';
import { articlereducer, articleintialState } from './Redux/articleReducer';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const UserContext = createContext();
export const ChatContext = createContext();
export const ArticleContext = createContext();

const Routing = () => {
  const {state, dispatch} = useContext(UserContext);
  const {chatstate, chatdispatch} = useContext(ChatContext);
  const {articlestate, articledispatch} = useContext(ArticleContext);
  async function loadChatUser(list) {
    // console.log(list);
    list.forEach(async user => {
      console.log(user);
      const User = await firestore().collection('Users').doc(user).get();
      chatdispatch({type: 'UPDATE', payload: User._data});
    });
  }

  useEffect(() => {
    async function getUser() {
      try {
        const udata = await auth().currentUser;
        const savedUser = await firestore()
          .collection('Users')
          .doc(udata.email)
          .get();

        savedUser._data.userType == 'Mentor'
          ? loadChatUser(savedUser._data.clients)
          : loadChatUser(savedUser._data.mentors);

        dispatch({type: 'USER', payload: savedUser._data});

      } catch (err) {
        console.log(err);
      }
    }

    async function getArticles(){
      await firestore().collection('Blogs').get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            articledispatch({type:"UPDATE", payload:doc.data()});
        });
      });
    }

    getArticles();

    getUser();
  }, []);
  return <Routes />;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [chatstate, chatdispatch] = useReducer(chatreducer, chatintialState);
  const [articlestate, articledispatch] = useReducer(articlereducer, articleintialState);
  return (
    <Provider store={store} style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.primarycolor}
      />
      <AuthProvider>
        <UserContext.Provider value={{state, dispatch}}>
          <ChatContext.Provider value={{chatstate, chatdispatch}}>
            <ArticleContext.Provider value={{articlestate, articledispatch}}>
            <Routing />
            </ArticleContext.Provider>
          </ChatContext.Provider>
        </UserContext.Provider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
