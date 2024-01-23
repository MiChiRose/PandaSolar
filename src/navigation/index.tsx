import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import RulesScreen from '../screens/RulesScreen';
import PriceScreen from '../screens/PriceScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { width } from '../constants/deviceParam';
import { Images } from '../constants/images';
import { Routes } from '../constants/Route';
import { Gradient } from '../components/Gradient';
import { images } from '../../assets/images.connected';
import styles from './styles';

const Drawer = createDrawerNavigator();
const screenWidth = width;
const drawerWidth = screenWidth - 72;

const LogoSVG = images[Images.logo];
const LogoBlack = images[Images.logoBlack];
const DrawerSVG = images[Images.drawer];

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={Routes.home}
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
          name={Routes.home}
          options={() => ({
            drawerLabel: 'Главная',
            title: '',
            drawerLabelStyle: styles.drawerLabelStyle,
            headerShadowVisible: false,
            headerTitle: () => <LogoBlack />,
          })}
          component={HomeScreen}
        />
        <Drawer.Screen
          name={Routes.rules}
          options={() => ({
            drawerLabel: 'Правила посещения',
            title: 'Правила посещения',
            drawerLabelStyle: styles.drawerLabelStyle,
            headerTitleStyle: styles.titleStyle,
          })}
          component={RulesScreen}
        />
        <Drawer.Screen
          name={Routes.price}
          options={{
            drawerLabel: 'Прайс лист',
            title: 'Прайс лист',
            drawerLabelStyle: styles.drawerLabelStyle,
            headerTitleStyle: styles.titleStyle,
          }}
          component={PriceScreen}
        />
        <Drawer.Screen
          name={Routes.gallery}
          options={{
            drawerLabel: 'Галерея',
            title: 'Галерея',
            drawerLabelStyle: styles.drawerLabelStyle,
            headerTitleStyle: styles.titleStyle,
          }}
          component={GalleryScreen}
        />
        <Drawer.Screen
          name={Routes.contacts}
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

export default DrawerNavigation;
