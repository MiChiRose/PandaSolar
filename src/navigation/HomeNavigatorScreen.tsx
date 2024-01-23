import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CatalogDetailScreen from '../screens/CatalogDetailScreen';
import CatalogProductDetailScreen from '../screens/CatalogProductDetailScreen';
import { Gradient } from '../components/Gradient';
import { Color } from '../constants/color';
import { images } from '../../assets/images.connected';
import { Images } from '../constants/images';

const Stack = createStackNavigator();

const DrawerSVG = images[Images.drawer];
const LogoBlack = images[Images.logoBlack];

export const HomeNavigatorScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          headerShadowVisible: false,
          // headerBackground: () => <Gradient style={styles.flex} />,
          headerLeft: () => (
            <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}>
              <DrawerSVG />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View>
              <LogoBlack />
            </View>
          ),
        })}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={({ route, navigation }) => ({
          headerBackground: () => <Gradient style={styles.flex} />,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.drawerButton}
              onPress={() => navigation.goBack()}
            ></TouchableOpacity>
          ),
          title: route.params?.name,
          headerTitleStyle: styles.titleStyle,
        })}
        name="CatalogDetails"
        component={CatalogDetailScreen}
      />
      <Stack.Screen
        options={({ route, navigation }) => ({
          headerBackground: () => <Gradient style={styles.flex} />,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.drawerButton}
              onPress={() => navigation.goBack()}
            ></TouchableOpacity>
          ),
          title: route.params?.name,
          headerTitleStyle: styles.titleStyle,
        })}
        name="CatalogProductDetails"
        component={CatalogProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerButton: {
    paddingVertical: 12,
    paddingLeft: 30,
    paddingRight: 12,
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    width: '100%',
  },
  flex: { flex: 1 },
});
