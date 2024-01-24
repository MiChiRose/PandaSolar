import React, { memo, useEffect, useState } from 'react';
import RulesComponent from '../atoms/rules';
import CustomScrollView from '../components/scrollView';
import Container from '../components/container';
import { RulesType } from '../constants/types';
import { dataLoad } from '../utils/data';

const RulesScreen = () => {
  const [rules, setRules] = useState<RulesType[]>([]);
  const [loading, isLoading] = useState<boolean>(false);

  const init = async () => {
    const resp = await dataLoad({ path: 'rules', isLoading });
    resp && setRules(resp.data);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <CustomScrollView loading={loading} refreshing={loading} refresh={init}>
        <RulesComponent rules={rules} />
      </CustomScrollView>
    </Container>
  );
};

export default memo(RulesScreen);
