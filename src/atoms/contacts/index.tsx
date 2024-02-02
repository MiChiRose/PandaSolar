import React, { useMemo } from 'react';
import { FlatList, Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { ContactsType } from '../../constants/types';
import { checkLink } from '../../utils/checkLink';

type ContactsComponentProps = {
  contacts: ContactsType;
  shortened?: boolean;
}

const ContactsComponent = ({contacts, shortened}: ContactsComponentProps): React.JSX.Element => {

  const socialData = useMemo(() => {
    if (!!contacts.social) {
      const social = contacts.social;
      return [social.instagram, social.vk, social.telegram];
    }
    return []
  }, [contacts]);

  return (
    <>
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
          {!shortened && (
            <View style={{ marginVertical: 20 }}>
              <Text style={{ fontFamily: 'LatoBold', fontSize: 18 }}>
                {contacts.address.header}
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'Lato', fontSize: 16 }}>{contacts.address.address}</Text>
              </View>
            </View>
          )}
          <View>
            <Text style={{ fontFamily: 'LatoBold', fontSize: 18 }}>{contacts.social.header}</Text>
            <FlatList
              style={{ flexDirection: 'row', marginTop: 10 }}
              horizontal
              data={socialData}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      checkLink(item.link) &&
                      Linking.openURL(item.link);
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{ height: 32, width: 32 }}
                    />
                  </TouchableOpacity>
                )
              }}
            />

          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  )
}

export default ContactsComponent;
