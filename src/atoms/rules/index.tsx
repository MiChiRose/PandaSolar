import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { RulesType } from '../../constants/types';
import { Images } from '../../constants/images';
import { images } from '../../../assets/images.connected';
import styles from './styles';

type RulesProps = {
  rules: RulesType[];
};

const CheckSVG = images[Images.check];

const RulesComponent = ({ rules }: RulesProps): React.JSX.Element => {
  const [fonts] = useFonts({
    Lato: require('../../../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../../../assets/fonts/Lato-Bold.ttf'),
  });

  return (
    <FlatList
      data={rules}
      scrollEnabled={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            {/*<CheckSVG height={20} width={20} style={styles.image} />*/}
            <Text style={[styles.flex, { fontFamily: 'Lato' }]}>{item.text}</Text>
          </View>
        );
      }}
    />
  );
};

export default RulesComponent;
