import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Color } from '../../../constants/color';

const ListItem = ({ title, onPress, disabled }): JSX.Element => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={{ width: '100%' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ListItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  imageUrl: {
    height: 75,
    width: 110,
    marginRight: 15,
  },
  detailsContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
