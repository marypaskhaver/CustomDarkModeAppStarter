import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';

import {APP_THEMES} from '../constants';

const getThemeFromScheme = scheme => {
  const schemeIsDark = scheme === 'dark';
  const currentPhoneTheme = schemeIsDark ? APP_THEMES.dark : APP_THEMES.light;

  return currentPhoneTheme;
};

const ThemedNavigationContainer = ({children}) => {
  const scheme = useColorScheme();
  const currentPhoneTheme = getThemeFromScheme(scheme);

  return (
    <NavigationContainer theme={currentPhoneTheme}>
      {children}
    </NavigationContainer>
  );
};

export default ThemedNavigationContainer;
