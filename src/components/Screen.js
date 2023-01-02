import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {AutomaticDarkModeSwitch, BackgroundView, Card, Row} from '.';

const Screen = () => {
  return (
    <BackgroundView>
      <Card>
        <Row>
          <Text style={styles.grayText}>Automatic</Text>
          <AutomaticDarkModeSwitch />
        </Row>
      </Card>
    </BackgroundView>
  );
};

const styles = StyleSheet.create({
  grayText: {
    color: '#8E8E93',
    fontSize: 16,
  },
});

export default Screen;
