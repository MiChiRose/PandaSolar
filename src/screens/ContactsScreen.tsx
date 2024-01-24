import React, { memo, useEffect, useState } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import Container from '../components/container';
import { MapViewV1 } from '../components/MapViewV1';
import CustomScrollView from '../components/scrollView';
import { dataLoad, getData } from '../utils/data';
import { ContactsType } from '../constants/types';
import { checkLink } from '../utils/checkLink';

const ContactsScreen = (): React.JSX.Element => {
  const [fonts] = useFonts({
    Lato: require('../../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../../assets/fonts/Lato-Bold.ttf'),
  });

  const [loading, isLoading] = useState(false);
  const [contacts, setContacts] = useState<ContactsType>({});

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
        <MapViewV1 />
        {Object.keys(contacts).length > 0 ? (
          <View style={{ marginVertical: 30 }}>
            <Text style={{ fontFamily: 'LatoBold', fontSize: 18 }}>{contacts.header}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ fontFamily: 'Lato', fontSize: 16 }}>{contacts.phoneFirst.phone}</Text>
              <Image
                source={{ uri: contacts.phoneFirst.image }}
                style={{ height: 25, width: 25, marginLeft: 12 }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'Lato', fontSize: 16 }}>{contacts.phoneSecond.phone}</Text>
              <Image
                source={{ uri: contacts.phoneSecond.image }}
                style={{ height: 25, width: 88, marginLeft: 12 }}
              />
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={{ fontFamily: 'LatoBold', fontSize: 18 }}>
                {contacts.address.header}
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'Lato', fontSize: 16 }}>{contacts.address.address}</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontFamily: 'LatoBold', fontSize: 18 }}>{contacts.social.header}</Text>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    checkLink(contacts.social.instagram.link) &&
                      Linking.openURL(contacts.social.instagram.link);
                  }}
                >
                  <Image
                    source={{ uri: contacts.social.instagram.image }}
                    style={{ height: 32, width: 32 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginHorizontal: 15 }}
                  onPress={() => {
                    checkLink(contacts.social.vk.link) && Linking.openURL(contacts.social.vk.link);
                  }}
                >
                  <Image
                    source={{ uri: contacts.social.vk.image }}
                    style={{ height: 32, width: 32 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    checkLink(contacts.social.telegram.link) &&
                      Linking.openURL(contacts.social.telegram.link);
                  }}
                >
                  <Image
                    source={{ uri: contacts.social.telegram.image }}
                    style={{ height: 32, width: 32 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <></>
        )}
      </CustomScrollView>
    </Container>
  );
};

export default memo(ContactsScreen);
