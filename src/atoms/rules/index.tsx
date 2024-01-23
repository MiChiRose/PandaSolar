import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { RulesType } from '../../constants/types';
import styles from './styles';

type RulesProps = {
  rules: RulesType[];
};

const RulesComponent = ({ rules }: RulesProps): React.JSX.Element => {
  return (
    <FlatList
      data={rules}
      scrollEnabled={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.flex}>{item.text}</Text>
          </View>
        );
      }}
    />
  );
};

export default RulesComponent;
