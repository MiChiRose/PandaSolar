import React, { memo, useEffect, useState } from 'react';
import { Text, StyleSheet, Image, Dimensions, FlatList, View } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import Container from '../components/Container';
import { CustomScrollView } from '../components/CustomScrollView';
import { getData } from '../components/data';
import { width } from '../constants/deviceParam';
import { Colors } from '../constants/color';

const GalleryScreen = () => {
  const [gallery, setGallery] = useState<string[]>([]);
  const [loading, isLoading] = useState(false);

  const dataLoad = async () => {
    isLoading(true);
    try {
      const resp = await getData({ documentPath: 'gallery' });
      if (resp) {
        setGallery(resp[0]);
      }
      isLoading(false);
    } catch (e) {
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
                <View style={{ height: width / 2, width: width / 2 - 24 }}>
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

export default GalleryScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  image: {
    width: '100%',
    marginBottom: 25,
  },
  image1: {
    width: width - 50,
    height: (width - 50) / 1.5,
    resizeMode: 'cover',
    marginBottom: 25,
  },
});
