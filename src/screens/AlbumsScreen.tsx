import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {logOut, authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;
  return (
    <View>
      <Text>Desde AlbumsScreen</Text>
      {isLoggedIn && <Button title="Logout" onPress={logOut} />}
    </View>
  );
};
