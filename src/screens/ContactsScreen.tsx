import React, { memo, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Container from '../components/Container';
import { MapViewV1 } from '../components/MapViewV1';
import { CustomScrollView } from '../components/CustomScrollView';
import { getData } from '../components/data';

const ContactsScreen = (): JSX.Element => {
  const [loading, isLoading] = useState(false);

  // const dataLoad = () => {
  //   isLoading(true);
  //   getData({ mainPath: 'main', documentPath: 'contacts' })
  //     .then((resp) => {
  //       // setAddressData(resp[0]);
  //       // setContactsData(resp[1]);
  //       isLoading(false);
  //     })
  //     .catch((e) => {
  //       isLoading(false);
  //       console.log(e);
  //     });
  // };
  //
  // useEffect(() => {
  //   dataLoad();
  // }, []);

  return (
    <Container>
      <CustomScrollView refreshing={loading} refresh={() => {}}>
        <MapViewV1 />
      </CustomScrollView>
      <Spinner visible={loading} />
    </Container>
  );
};

export default memo(ContactsScreen);
