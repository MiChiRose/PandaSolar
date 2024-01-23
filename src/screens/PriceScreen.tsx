import React, { memo, useEffect, useState } from 'react';
import PriceListComponent from '../atoms/price';
import Container from '../components/container';
import CustomScrollView from '../components/scrollView';
import { PriceList } from '../constants/types';
import { dataLoad, getData } from '../utils/data';
import { mapPriceListData } from '../utils/mapData';
import { onPriceRowPress } from '../utils/onPress';

const PriceScreen = () => {
  const [priceListData, setPriceListData] = useState<PriceList[]>([]);
  const [loading, isLoading] = useState(false);

  const init = async () => {
    const resp = await dataLoad({ path: 'price', isLoading });
    resp && setPriceListData(resp.data.map(mapPriceListData));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <CustomScrollView loading={loading} refreshing={loading} refresh={init}>
        <PriceListComponent
          priceListData={priceListData}
          onPriceRowPress={(index: number) =>
            onPriceRowPress(index, priceListData, setPriceListData)
          }
        />
      </CustomScrollView>
    </Container>
  );
};

export default memo(PriceScreen);
