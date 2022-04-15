import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppColors from '../Constaint/AppColors';
export const proData = [
  {
    id: 0,
    icon: <Icon name="cogs" size={30} color={AppColors.ActiveColor} />,
    title: 'Mentor ',
    sub: 'First trial session with mentor free',
  },
  {
    id: 1,
    icon: <Icon name="book-reader" size={33} color={AppColors.ActiveColor} />,
    title: 'Learn ',
    sub: 'Access to all books',
  },
  {
    id: 3,
    icon: <Icon name="users" size={30} color={AppColors.ActiveColor} />,
    title: 'Rooms ',
    sub: 'Get 50% more networking and 30 Handshakes monthly',
  },
];
