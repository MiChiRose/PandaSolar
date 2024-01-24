import React, { memo, useEffect, useState } from 'react';
import { Image, FlatList, View } from 'react-native';
import Container from '../components/container';
import CustomScrollView from '../components/scrollView';
import { dataLoad, getData } from '../utils/data';
import { width } from '../constants/deviceParam';

const imageWidth = width / 2 - 20;

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
          data={gallery}
          horizontal={false}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                style={[
                  {
                    height: width / 2,
                    width: imageWidth,
                  },
                  { marginRight: index % 2 === 0 ? 5 : 0 },
                  { marginLeft: index % 2 === 0 ? 0 : 5 },
                ]}
              >
                <Image source={{ uri: item }} style={{ height: width / 2, width: imageWidth }} />
              </View>
            );
          }}
        />
      </CustomScrollView>
    </Container>
  );
};

export default memo(GalleryScreen);
