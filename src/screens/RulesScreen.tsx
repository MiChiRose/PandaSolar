import React, { memo, useEffect, useState } from 'react';
import Container from '../components/Container';
import { CustomScrollView } from '../components/CustomScrollView';
import { getData } from '../components/data';
import { DotIndicator } from 'react-native-indicators';
import { Colors } from '../constants/color';

const RulesScreen = () => {
  const [rules, setRules] = useState<{ image: string; text: string }[]>([]);
  const [loading, isLoading] = useState(false);

  const dataLoad = () => {
    isLoading(true);
    getData({ documentPath: 'rules' })
      .then((resp) => {
        console.log(resp);
        setRules(resp[0]);
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
      <CustomScrollView refreshing={loading} refresh={dataLoad}>
        {loading ? <DotIndicator count={3} size={6} color={Colors.gradientStart} /> : <></>}
      </CustomScrollView>
    </Container>
  );
};

export default RulesScreen;
