import React, {FC, memo, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Splashscreen: FC = () => {
  useEffect(() => {
    return () => {
      SplashScreen.hide();
    };
  });

  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EC7CB',
  },
});

export default memo(Splashscreen);
