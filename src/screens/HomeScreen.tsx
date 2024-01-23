import React, { memo, useEffect, useState } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';
import { CustomScrollView } from '../components/CustomScrollView';
import { getData } from '../components/data';
import { images } from '../../assets/images.connected';
import { Images } from '../constants/images';

const DrawerSVG = images[Images.drawer];

const HomeScreen = ({ navigation: { navigate } }) => {
  const [showServices, setShowServices] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [showNews, setShowNews] = useState<boolean>(false);

  const [newsData, setNewsData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [catalogData, setCatalogData] = useState([]);
  const [loading, isLoading] = useState(false);

  const dataLoad = () => {
    isLoading(true);
    Promise.all([
      getData({ mainPath: 'main', documentPath: 'gallery' }),
      // getData({ mainPath: 'main', documentPath: 'services' }),
      // getData({ mainPath: 'main', documentPath: 'catalog' }),
    ])
      .then((resp) => {
        // setNewsData(resp[0][0]);
        // setServicesData(resp[1][0]);
        // setCatalogData(resp[2][0]);
        isLoading(false);
      })
      .catch((e) => {
        isLoading(false);
        console.log(e);
      });
  };

  // useEffect(() => {
  //   dataLoad();
  // }, []);

  // const buttons = [
  //   {
  //     title: 'Арматура',
  //     onPress: () =>
  //       navigate('CatalogDetails', { data: catalogData[3].data, name: catalogData[3].title }),
  //   },
  //   {
  //     title: 'Приборы и устройства',
  //     onPress: () =>
  //       navigate('CatalogDetails', { data: catalogData[0].data, name: catalogData[0].title }),
  //   },
  //   {
  //     title: 'Оборудование для систем газоснабжения',
  //     onPress: () =>
  //       navigate('CatalogProductDetails', {
  //         data: catalogData[1].data,
  //         name: catalogData[1].title,
  //       }),
  //   },
  //   {
  //     title: 'Технологическое оборудование для ГНС и АЗС',
  //     onPress: () =>
  //       navigate('CatalogDetails', { data: catalogData[2].data, name: catalogData[2].title }),
  //   },
  // ];

  return (
    <Container>
      <CustomScrollView refreshing={loading} refresh={() => {}}></CustomScrollView>
    </Container>
  );
};

export default memo(HomeScreen);
