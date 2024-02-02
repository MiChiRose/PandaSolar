import React from 'react';
import { Text, View } from 'react-native';
import { InviteType } from '../../constants/types';
import { Colors } from '../../constants/color';

type HomeHeaderComponentProps = {
  homeHeader: InviteType
}

const HomeHeaderComponent = ({homeHeader}: HomeHeaderComponentProps): React.JSX.Element => {
  return (
    <>
      {Object.keys(homeHeader).length > 0 ? (
        <View>
          <Text
            style={{
              fontFamily: 'LatoBold',
              fontSize: 18,
              color: Colors.gradientStart,
              marginBottom: 10,
            }}
          >
            {homeHeader.header}
          </Text>
          <Text style={{ fontFamily: 'Lato', fontSize: 18, flex: 1, marginBottom: 10 }}>
            {homeHeader.title}
          </Text>
          <Text style={{ fontFamily: 'Lato', fontSize: 18, flex: 1, marginBottom: 10 }}>
            {homeHeader.subtitle}
          </Text>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text
              style={{ fontFamily: 'Lato', fontSize: 18, flex: 1 }}
            >{`${homeHeader.hours.title} ${homeHeader.hours.time}`}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{ fontFamily: 'Lato', fontSize: 18, flex: 1 }}
            >{`${homeHeader.address.title} ${homeHeader.address.address}`}</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  )
}

export default HomeHeaderComponent;
