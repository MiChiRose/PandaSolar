import React, { memo, useEffect, useMemo, useState } from 'react';
import { useFonts } from 'expo-font';
import ContactsComponent from '../atoms/contacts';
import Container from '../components/container';
import MapViewV1 from '../components/MapViewV1';
import CustomScrollView from '../components/scrollView';
import { dataLoad, getData } from '../utils/data';
import { ContactsType } from '../constants/types';

const ContactsScreen = (): React.JSX.Element => {
  const [fonts] = useFonts({
    Lato: require('../../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../../assets/fonts/Lato-Bold.ttf'),
  });

  const [loading, isLoading] = useState(false);
  const [contacts, setContacts] = useState<ContactsType>({});

  const markerText = useMemo(() => {
    if (!!contacts?.address?.address) {
      const adr = contacts?.address?.address.split(',')
      return {
        title: `${adr[1]}`,
        description: `${adr[adr?.length - 1]}`
      }
    }

    return {
      title: ``,
      description: ``
    }
  }, [contacts?.address])

  const init = async () => {
    const resp = await dataLoad({ path: 'contacts', isLoading });
    resp && setContacts(resp.data);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <CustomScrollView refreshing={loading} refresh={init}>
        <MapViewV1 markerTitle={markerText.title} markerDescription={markerText.description}/>
        <ContactsComponent contacts={contacts}/>
      </CustomScrollView>
    </Container>
  );
};

export default memo(ContactsScreen);
