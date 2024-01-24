import React, { memo, useEffect, useState } from 'react';
import { Image, FlatList, View } from 'react-native';
import Container from '../components/container';
import CustomScrollView from '../components/scrollView';
import { dataLoad, getData } from '../utils/data';
import { width } from '../constants/deviceParam';

const GalleryScreen = () => {
  const [gallery, setGallery] = useState<string[]>([]);
  const [loading, isLoading] = useState(false);

  const init = async () => {
    const resp = await dataLoad({ path: 'gallery', isLoading });
    resp && setGallery(resp[0]);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <CustomScrollView loading={loading} refreshing={loading} refresh={init}>
        <FlatList
          scrollEnabled={false}
          numColumns={2}
          data={gallery}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 12 }} />}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={{ height: width / 2, width: width / 2 - 20 }}>
                <Image
                  source={{ uri: item }}
                  style={{ height: width / 2, width: width / 2 - 34 }}
                />
              </View>
            );
          }}
        />
      </CustomScrollView>
    </Container>
  );
};

export default memo(GalleryScreen);
