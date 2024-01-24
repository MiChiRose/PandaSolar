import React, { memo, useEffect, useState } from 'react';
import { FlatList, Image, Linking, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import PriceListComponent from '../atoms/price';
import Container from '../components/container';
import CustomScrollView from '../components/scrollView';
import { ContactsType, InviteType, NewsType, PriceList } from '../constants/types';
import { dataLoad } from '../utils/data';
import { mapPriceListData } from '../utils/mapData';
import { onPriceRowPress } from '../utils/onPress';
import { Colors } from '../constants/color';
import { checkLink } from '../utils/checkLink';
import GradientButton from '../components/button/GradientButton';

const HomeScreen = () => {
  const [fonts] = useFonts({
    Lato: require('../../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../../assets/fonts/Lato-Bold.ttf'),
  });

  const [newsData, setNewsData] = useState<NewsType[]>([]);
  const [inviteData, setInviteData] = useState<InviteType>({});
  const [contacts, setContacts] = useState<ContactsType>({});
  const [priceListData, setPriceListData] = useState<PriceList[]>([]);
  const [loading, isLoading] = useState(false);

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const init = async () => {
    try {
      const respPrice = await dataLoad({ path: 'price', isLoading });
      const respInvite = await dataLoad({ path: 'invite', isLoading });
      const respNews = await dataLoad({ path: 'news', isLoading });
      const respContacts = await dataLoad({ path: 'contacts', isLoading });
      respContacts && setContacts(respContacts.data);
      respNews && setNewsData(respNews.data.news);
      respInvite && setInviteData(respInvite.data);
      respPrice && setPriceListData(respPrice.data.map(mapPriceListData));
    } catch (e) {
      console.log('Something went wrong', e);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <CustomScrollView loading={loading} refreshing={loading} refresh={init}>
        {Object.keys(inviteData).length > 0 ? (
          <View>
            <Text
              style={{
                fontFamily: 'LatoBold',
                fontSize: 18,
                color: Colors.gradientStart,
                marginBottom: 10,
              }}
            >
              {inviteData.header}
            </Text>
            <Text style={{ fontFamily: 'Lato', fontSize: 18, flex: 1, marginBottom: 10 }}>
              {inviteData.title}
            </Text>
            <Text style={{ fontFamily: 'Lato', fontSize: 18, flex: 1, marginBottom: 10 }}>
              {inviteData.subtitle}
            </Text>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text
                style={{ fontFamily: 'Lato', fontSize: 18, flex: 1 }}
              >{`${inviteData.hours.title} ${inviteData.hours.time}`}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{ fontFamily: 'Lato', fontSize: 18, flex: 1 }}
              >{`${inviteData.address.title} ${inviteData.address.address}`}</Text>
            </View>
          </View>
        ) : (
          <></>
        )}

        <View style={{ marginVertical: 20 }}>
          <View
            style={{
              borderRadius: 5,
              height: 40,
              flex: 1,
              borderWidth: 0.5,
              paddingHorizontal: 10,
              marginBottom: 10,
            }}
          >
            <TextInput
              style={{ flex: 1 }}
              placeholder={'Имя'}
              onChangeText={setName}
              value={name}
            />
          </View>
          <View
            style={{
              borderRadius: 5,
              height: 40,
              flex: 1,
              borderWidth: 0.5,
              paddingHorizontal: 10,
              marginBottom: 10,
            }}
          >
            <TextInput
              style={{ flex: 1 }}
              placeholder={'Номер телефона'}
              onChangeText={setPhone}
              value={phone}
            />
          </View>
          <GradientButton onPress={() => {}} text={'Записаться на сеанс'} />
        </View>

        <PriceListComponent
          priceListData={priceListData}
          onPriceRowPress={(index: number) =>
            onPriceRowPress(index, priceListData, setPriceListData)
          }
        />

        <View>
          <FlatList
            data={newsData}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 90, width: 150, borderWidth: 0.5 }}
                  />
                  <Text style={{ flex: 1, fontFamily: 'Lato', marginLeft: 10 }}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {Object.keys(contacts).length > 0 ? (
          <View>
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
            <View>
              <Text style={{ fontFamily: 'LatoBold', fontSize: 18 }}>{contacts.social.header}</Text>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    checkLink(contacts.social.instagram.link) &&
                      Linking.openURL(contacts.social.instagram.link || '');
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
                    checkLink(contacts.social.vk.link) &&
                      Linking.openURL(contacts.social.vk.link || '');
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
                      Linking.openURL(contacts.social.telegram.link || '');
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

export default memo(HomeScreen);
