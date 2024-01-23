import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PriceList } from '../../constants/types';
import styles from './styles';

type PriceProps = {
  priceListData: PriceList[];
  onPriceRowPress: (index: number) => void;
};

const PriceListComponent = ({ priceListData, onPriceRowPress }: PriceProps): React.JSX.Element => {
  return (
    <FlatList
      scrollEnabled={false}
      data={priceListData}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item, index }) => {
        return (
          <View>
            <TouchableOpacity onPress={() => onPriceRowPress(index)} style={styles.header}>
              <Text style={styles.flex}>{item.header}</Text>
            </TouchableOpacity>
            {!!item.show &&
              item.data?.map((it, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: 'red',
                    }}
                  >
                    <Text style={{ flex: 1, textAlign: 'left' }}>{it.title}</Text>
                    <Text style={{ flex: 1, textAlign: 'right' }}>{it.price}</Text>
                  </View>
                );
              })}
          </View>
        );
      }}
    />
  );
};

export default PriceListComponent;
