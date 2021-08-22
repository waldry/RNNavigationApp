import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles, colores} from '../themes/appTheme';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Icon name="airplane-outline" size={80} color={colores.primary} />
    </View>
  );
};
