import React from 'react';
import {useContext} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
