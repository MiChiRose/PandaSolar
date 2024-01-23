import React, { memo, useEffect, useState } from 'react';
import Container from '../components/Container';
import { CustomScrollView } from '../components/CustomScrollView';
import { getData } from '../components/data';
import { DotIndicator } from 'react-native-indicators';
import { Colors } from '../constants/color';
import { FlatList, View, Image, Text } from 'react-native';

const RulesScreen = () => {
  const [rules, setRules] = useState<{ image: string; text: string }[]>([]);
  const [loading, isLoading] = useState(false);

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
      <CustomScrollView refreshing={loading} refresh={dataLoad}>
        {loading ? (
          <DotIndicator count={3} size={6} color={Colors.gradientStart} />
        ) : (
          <FlatList
            data={rules}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
            renderItem={({ item, index }) => {
              return (
                <View style={{ flexDirection: 'row', columnGap: 10 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 20, width: 20, marginRight: 10 }}
                  />
                  <Text style={{ flex: 1 }}>{item.text}</Text>
                </View>
              );
            }}
          />
        )}
      </CustomScrollView>
    </Container>
  );
};

export default RulesScreen;
