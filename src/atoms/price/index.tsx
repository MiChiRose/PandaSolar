import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { PriceList } from '../../constants/types';
import { Images } from '../../constants/images';
import { images } from '../../../assets/images.connected';
import styles from './styles';

const ArrowSVG = images[Images.arrow];

type PriceProps = {
  priceListData: PriceList[];
  onPriceRowPress: (index: number) => void;
};

const PriceListComponent = ({ priceListData, onPriceRowPress }: PriceProps): React.JSX.Element => {
  const [fonts] = useFonts({
    Lato: require('../../../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../../../assets/fonts/Lato-Bold.ttf'),
  });

  return (
    <FlatList
      scrollEnabled={false}
      data={priceListData}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item, index }) => {
        return (
          <View>
            <TouchableOpacity onPress={() => onPriceRowPress(index)} style={styles.header}>
              <Text style={[styles.flex, styles.headerText, { fontFamily: 'LatoBold' }]}>
                {item.header}
              </Text>
              <ArrowSVG
                height={24}
                width={24}
                style={{ transform: [{ rotate: item.show ? '0deg' : '180deg' }] }}
              />
            </TouchableOpacity>
            <View style={{ paddingVertical: 18 }}>
              {!!item.show &&
                item.data?.map((it, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 10,
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={[
                          styles.priceText,
                          { flex: 1, textAlign: 'left', fontFamily: 'Lato' },
                        ]}
                      >
                        {it.title}
                      </Text>
                      <Text
                        style={[
                          styles.priceText,
                          { flex: 1, textAlign: 'right', fontFamily: 'Lato' },
                        ]}
                      >
                        {it.price}
                      </Text>
                    </View>
                  );
                })}
            </View>
          </View>
        );
      }}
    />
  );
};

export default PriceListComponent;
