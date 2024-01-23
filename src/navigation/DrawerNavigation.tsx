import React from 'react';
import { Platform, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import ContactsScreen from '../screens/ContactsScreen';
import PriceScreen from '../screens/PriceScreen';
import GalleryScreen from '../screens/GalleryScreen';
import RulesScreen from '../screens/RulesScreen';
import { HomeNavigatorScreen } from './HomeNavigatorScreen';
import { Gradient } from '../components/Gradient';
import { width } from '../constants/deviceParam';
import { Images } from '../constants/images';
import { images } from '../../assets/images.connected';
import { Colors } from '../constants/color';

const Drawer = createDrawerNavigator();
const screenWidth = width;
const drawerWidth = screenWidth - 72;

const LogoSVG = images[Images.logo];
const DrawerSVG = images[Images.drawer];

export const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeMain"
        screenOptions={({ navigation }) => ({
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}>
              <DrawerSVG height={16} width={25} />
            </TouchableOpacity>
          ),
          drawerStyle: { width: drawerWidth },
        })}
        drawerContent={(props) => {
          return (
            <Gradient style={styles.flex}>
              <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center', marginBottom: 25 }}>
                  <LogoSVG height={50} width={168} />
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            </Gradient>
          );
        }}
      >
        <Drawer.Screen
          name="HomeMain"
          options={() => ({
            drawerLabel: 'Главная',
            title: '',
            drawerLabelStyle: styles.drawerLabelStyle,
            headerTitleStyle: styles.titleStyle,
            headerShown: false,
          })}
          component={HomeNavigatorScreen}
        />
        <Drawer.Screen
          name="Rules"
          options={() => ({
            drawerLabel: 'Правила посещения',
            title: 'Правила посещения',
            drawerLabelStyle: styles.drawerLabelStyle,
            headerTitleStyle: styles.titleStyle,
          })}
          component={RulesScreen}
        />
        <Drawer.Screen
          name="Price"
          options={{
            drawerLabel: 'Прайс лист',
            title: 'Прайс лист',
            drawerLabelStyle: styles.drawerLabelStyle,
            headerTitleStyle: styles.titleStyle,
          }}
          component={PriceScreen}
        />
        <Drawer.Screen
          name="Gallery"
          options={{
            drawerLabel: 'Галерея',
            title: 'Галерея',
            drawerLabelStyle: styles.drawerLabelStyle,
            headerTitleStyle: styles.titleStyle,
          }}
          component={GalleryScreen}
        />
        <Drawer.Screen
          name="Contacts"
          options={{
            drawerLabel: 'Контакты',
            title: 'Контакты',
            drawerLabelStyle: styles.drawerLabelStyle,
            headerTitleStyle: styles.titleStyle,
          }}
          component={ContactsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
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
  flex: { flex: 1 },
});
