import React, { memo, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Container from '../components/container';
import { MapViewV1 } from '../components/MapViewV1';
import CustomScrollView from '../components/scrollView';
import { getData } from '../utils/data';

const ContactsScreen = (): React.JSX.Element => {
  const [loading, isLoading] = useState(false);

  const dataLoad = () => {
    // isLoading(true);
    // getData({ mainPath: 'main', documentPath: 'contacts' })
    //   .then((resp) => {
    //     // setAddressData(resp[0]);
    //     // setContactsData(resp[1]);
    //     isLoading(false);
    //   })
    //   .catch((e) => {
    //     isLoading(false);
    //     console.log(e);
    //   });
  };

  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <Container>
      <CustomScrollView refreshing={loading} refresh={dataLoad}>
        <MapViewV1 />
      </CustomScrollView>
    </Container>
  );
};

export default memo(ContactsScreen);
