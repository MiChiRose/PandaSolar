import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../constants/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 12,
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  drawerButton: {
    paddingVertical: 12,
    paddingLeft: 30,
    paddingRight: 12,
  },
  drawerLabelStyle: {
    color: Colors.white,
    fontSize: 18,
  },
  drawerLogo: {
    marginVertical: 30,
    marginLeft: 10,
  },
  titleStyle: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
  flex: {
    flex: 1,
  },
});
