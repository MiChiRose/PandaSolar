import React, { memo, useEffect, useState } from 'react';
import RulesComponent from '../atoms/rules';
import CustomScrollView from '../components/scrollView';
import Container from '../components/container';
import { RulesType } from '../constants/types';
import { getData } from '../utils/data';

const RulesScreen = () => {
  const [rules, setRules] = useState<RulesType[]>([]);
  const [loading, isLoading] = useState<boolean>(false);

  const dataLoad = async () => {
    isLoading(true);
    try {
      const resp = await getData({ documentPath: 'rules' });
      if (resp) {
        setRules(resp.data);
      }
      isLoading(false);
    } catch (e) {
      isLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <Container>
      <CustomScrollView loading={loading} refreshing={loading} refresh={dataLoad}>
        <RulesComponent rules={rules} />
      </CustomScrollView>
    </Container>
  );
};

export default memo(RulesScreen);
