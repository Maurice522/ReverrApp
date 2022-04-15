import React, {useContext, useState, useEffect} from 'react';
import StackNav from './StackNav';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import AppNav from './AppNav';

const Routes = () => {
  const [user, setUser] = useState(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return <>{user ? <AppNav /> : <StackNav />}</>;
};

export default Routes;
