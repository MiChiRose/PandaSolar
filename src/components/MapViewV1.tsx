import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Platform } from 'react-native';

export const MapViewV1 = React.memo(() => {
  const region = {
    latitude: 54.48329,
    longitude: 26.382047,
    latitudeDelta: 0.001,
    longitudeDelta: Platform.OS === 'android' ? 0.0042 : 0.005,
  };

  return (
    <MapView
      pitchEnabled={false}
      zoomEnabled={false}
      scrollEnabled={false}
      rotateEnabled={false}
      style={{ height: 200, width: '100%' }}
      region={region}
    >
      <Marker coordinate={region} title={'Белгазтехника'} description={'ул.Гурского, д.30'} />
    </MapView>
  );
});
