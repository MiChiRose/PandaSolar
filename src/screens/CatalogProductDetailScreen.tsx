import React, { memo } from 'react';
import * as WebBrowser from 'expo-web-browser';
import Container from '../components/Container';
import { CustomScrollView } from '../components/CustomScrollView';

const CatalogProductDetailScreen = (): JSX.Element => {
  return (
    <Container>
      <CustomScrollView></CustomScrollView>
    </Container>
  );
};

export default memo(CatalogProductDetailScreen);
