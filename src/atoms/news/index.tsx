import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { NewsType } from '../../constants/types';

type NewsComponentProps = {
  news: NewsType[]
}

const NewsComponent = ({ news }: NewsComponentProps): React.JSX.Element => {
  return (
    <FlatList
      data={news}
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
  )
}

export default NewsComponent;
