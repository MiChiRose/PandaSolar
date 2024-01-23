import React, { memo, useEffect, useState } from 'react';
import Container from '../components/Container';
import { CustomScrollView } from '../components/CustomScrollView';
import { getData } from '../components/data';

const CatalogScreen = () => {
  const [catalog, setCatalog] = useState([]);
  const [loading, isLoading] = useState(false);

  const dataLoad = () => {
    isLoading(true);
    getData({ mainPath: 'main', documentPath: 'catalog' })
      .then((resp) => {
        setCatalog(resp[0]);
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
      <CustomScrollView refreshing={loading} refresh={dataLoad}></CustomScrollView>
    </Container>
  );
};

export default memo(CatalogScreen);
