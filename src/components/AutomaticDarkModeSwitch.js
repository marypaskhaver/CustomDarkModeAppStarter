import React, {useState} from 'react';
import {StyleSheet, Switch} from 'react-native';

const AutomaticDarkModeSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <Switch
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={styles.switch}
    />
  );
};

const styles = StyleSheet.create({
  switch: {
    marginLeft: 'auto',
  },
});

export default AutomaticDarkModeSwitch;
