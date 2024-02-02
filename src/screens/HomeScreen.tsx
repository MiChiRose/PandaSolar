import React, { memo, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import HomeHeaderComponent from '../atoms/homeHeader';
import PriceListComponent from '../atoms/price';
import ContactsComponent from '../atoms/contacts';
import SignUpComponent from '../atoms/signUp';
import NewsComponent from '../atoms/news';
import Container from '../components/container';
import CustomScrollView from '../components/scrollView';
import { ContactsType, InviteType, NewsType, PriceList } from '../constants/types';
import { dataLoad } from '../utils/data';
import { mapPriceListData } from '../utils/mapData';
import { onPriceRowPress } from '../utils/onPress';

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
        <HomeHeaderComponent homeHeader={inviteData}/>
        <SignUpComponent/>
        <PriceListComponent
          priceListData={priceListData}
          onPriceRowPress={(index: number) =>
            onPriceRowPress(index, priceListData, setPriceListData)
          }
        />
        <NewsComponent news={newsData}/>
        <ContactsComponent contacts={contacts} shortened/>
      </CustomScrollView>
    </Container>
  );
};

export default memo(HomeScreen);
