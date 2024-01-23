import React, { memo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from '../constants/color';

type ContainerProps = {
  children: React.JSX.Element | React.JSX.Element[];
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default memo(Container);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
