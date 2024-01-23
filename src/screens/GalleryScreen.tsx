import React, { memo, useEffect, useState } from 'react';
import { Text, StyleSheet, Image, Dimensions } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Container from '../components/Container';
import { CustomScrollView } from '../components/CustomScrollView';
import { getData } from '../components/data';
import { width } from '../constants/deviceParam';

const AboutInfoScreen = () => {
  const [data, setData] = useState<{ image: string; text: string }>();
  const [loading, isLoading] = useState(false);

  const dataLoad = () => {
    isLoading(true);
    getData({ mainPath: 'main', documentPath: 'about' })
      .then((resp) => {
        setData(resp[0]);
        isLoading(false);
      })
      .catch((e) => {
        isLoading(false);
        console.log(e);
      });
  };

  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <Container>
      <CustomScrollView refreshing={loading} refresh={dataLoad}>
        <Text style={styles.text}>{'1245678'}</Text>
      </CustomScrollView>
      <Spinner visible={loading} />
    </Container>
  );
};

export default memo(AboutInfoScreen);

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
