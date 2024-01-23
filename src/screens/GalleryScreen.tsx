import React, { memo, useEffect, useState } from 'react';
import { Image, FlatList, View } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import Container from '../components/container';
import CustomScrollView from '../components/scrollView';
import { dataLoad, getData } from '../utils/data';
import { width } from '../constants/deviceParam';
import { Colors } from '../constants/color';

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
      <CustomScrollView refreshing={loading} refresh={init}>
        {loading ? (
          <DotIndicator count={3} size={6} color={Colors.gradientStart} />
        ) : (
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={gallery}
            // columnWrapperStyle={{ rowGap: 10 }}
            ItemSeparatorComponent={() => <View style={{ marginVertical: 12 }} />}
            renderItem={({ item, index }) => {
              return (
                <View key={index} style={{ height: width / 2, width: width / 2 - 24 }}>
                  <Image
                    source={{ uri: item }}
                    style={{ height: width / 2, width: width / 2 - 24 }}
                  />
                </View>
              );
            }}
          />
        )}
      </CustomScrollView>
    </Container>
  );
};

export default memo(GalleryScreen);
