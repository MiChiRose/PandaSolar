import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useIsFocused } from '@react-navigation/native';
import { isAndroid, width } from '../constants/deviceParam';

const height = width / 1.5;

const MapViewV1 = ({markerTitle = '', markerDescription = ''}) => {
  const isFocused = useIsFocused();
  const mapRef = useRef<MapView>();
  const region = {
    latitude: 54.48329,
    longitude: 26.382047,
    latitudeDelta: 0.004,
    longitudeDelta: isAndroid() ? 0.0042 : 0.005,
  };

  useEffect(() => {
      mapRef.current?.animateToRegion(
        region,
        1000
      );
  }, [isFocused]);

  return (
    <MapView
      ref={mapRef}
      pitchEnabled={false}
      zoomEnabled={true}
      scrollEnabled={true}
      rotateEnabled={false}
      style={{ height: height, width: width - 40 }}
      region={region}
    >
      {(markerTitle || markerDescription) && (
        <Marker coordinate={region} title={markerTitle} description={markerDescription} />
      )}
    </MapView>
  );
};

export default MapViewV1;
