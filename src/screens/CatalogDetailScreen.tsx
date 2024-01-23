import React, { memo } from 'react';
import Container from '../components/Container';
import { CustomScrollView } from '../components/CustomScrollView';

const CatalogDetailScreen = (): JSX.Element => {
  return (
    <Container>
      <CustomScrollView></CustomScrollView>
    </Container>
  );
};

export default memo(CatalogDetailScreen);
