import React, { memo, useEffect, useState } from 'react';
import Container from '../components/Container';
import { CustomScrollView } from '../components/CustomScrollView';
import { getData } from '../components/data';
import { DotIndicator } from 'react-native-indicators';
import { Colors } from '../constants/color';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const PriceScreen = () => {
  const [priceListData, setPriceListData] = useState<{data: {title: string; price: string}[]; header: string; show: boolean}[]>([]);
  const [loading, isLoading] = useState(false);

  const dataLoad = async () => {
    isLoading(true);
    try {
      const resp  = await getData({ documentPath: 'price' })
      if (!!resp) {
        setPriceListData(resp.data.map((it) => {
          return {...it, show: false}
        }));
      }
      isLoading(false);
    }catch (e) {
      isLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <Container>
      <CustomScrollView refreshing={loading} refresh={dataLoad}>
        {loading ? (<DotIndicator count={3} size={6} color={Colors.gradientStart}/>) : (
          <FlatList scrollEnabled={false} data={priceListData} renderItem={({item, index}) => {
            return (
              <View>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Text style={{flex: 1}}>{item.header}</Text>
                </TouchableOpacity>
                {!!item.show && item.data?.map((it) => {
                  return (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'red'}}>
                      <Text style={{flex: 1, textAlign: 'left'}}>{it.title}</Text>
                      <Text style={{flex: 1, textAlign: 'right'}}>{it.price}</Text>
                    </View>
                  )
                })}
              </View>
            )
          }}/>
          )}
      </CustomScrollView>
    </Container>
  );
};

export default memo(PriceScreen);
