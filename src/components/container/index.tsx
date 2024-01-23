import React, { memo } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

type ContainerProps = {
  children?: React.JSX.Element | React.JSX.Element[];
};

const Container = ({ children }: ContainerProps): React.JSX.Element => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default memo(Container);
