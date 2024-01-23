import React from 'react';
import { ScrollView, RefreshControl, View } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import { Colors } from '../../constants/color';
import styles from './styles';

type ScrollViewProps = {
  refresh: () => void;
  refreshing: boolean;
  loading?: boolean;
  children?: React.JSX.Element | React.JSX.Element[];
};

const CustomScrollView = ({ children, refresh, refreshing, loading }: ScrollViewProps) => {
  return (
    <ScrollView
      style={styles.root}
      refreshControl={
        <RefreshControl
          enabled={refreshing}
          refreshing={refreshing ? refreshing : false}
          onRefresh={refresh}
        />
      }
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {loading ? (
        <DotIndicator count={3} size={6} color={Colors.gradientStart} />
      ) : (
        <View style={styles.paddingBottom}>{children}</View>
      )}
    </ScrollView>
  );
};

export default CustomScrollView;
