import React from "react";
import {Image, Platform, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import {createDrawerNavigator, DrawerItemList} from "@react-navigation/drawer";
import ServicesScreen from "../screens/ServicesScreen";
import AboutInfoScreen from "../screens/AboutInfoScreen";
import ContactsScreen from "../screens/ContactsScreen";
import {NavigationContainer} from "@react-navigation/native";
import {Gradient} from "../components/Gradient";
import {Color} from "../constants/color";
import {HomeNavigatorScreen} from "./HomeNavigatorScreen";
import {CatalogNavigatorScreen} from "./CatalogNavigatorScreen";
import {width} from "../constants/deviceParam";

const Drawer = createDrawerNavigator();
const screenWidth = width;
const drawerWidth = screenWidth - 72;

export const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeMain"
                screenOptions={({navigation}) => ({
                    headerBackground: () => <Gradient style={styles.flex}/>,
                    headerLeft: () => (
                        <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}>
                            <Image source={require("../../assets/drawer/drawer_white.png")}/>
                        </TouchableOpacity>
                    ),
                    drawerStyle: {width: drawerWidth},
                })}
                drawerContent={(props) => {
                    return (
                        <Gradient style={styles.flex}>
                            <SafeAreaView style={styles.container}>
                                <Image
                                    style={styles.drawerLogo}
                                    source={require("../../assets/BTGLogo/belgaztechnika_new.png")}
                                    resizeMode={"contain"}
                                />
                                <DrawerItemList {...props}/>
                            </SafeAreaView>
                        </Gradient>
                    )
                }}
            >
                <Drawer.Screen
                    name="HomeMain"
                    options={() => ({
                        drawerLabel: "Главная",
                        title: "",
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.titleStyle,
                        headerShown: false,
                    })}
                    component={HomeNavigatorScreen}
                />
                <Drawer.Screen
                    name="CatalogNavigator"
                    options={() => ({
                        drawerLabel: "Каталог",
                        title: "Каталог",
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.titleStyle,
                        headerShown: false
                    })}
                    component={CatalogNavigatorScreen}
                />
                <Drawer.Screen
                    name="Service"
                    options={{
                        drawerLabel: "Услуги",
                        title: "Услуги",
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.titleStyle
                    }}
                    component={ServicesScreen}
                />
                <Drawer.Screen
                    name="AboutInfo"
                    options={{
                        drawerLabel: "О Предприятии",
                        title: "О предприятии",
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.titleStyle
                    }}
                    component={AboutInfoScreen}
                />
                <Drawer.Screen
                    name="Contacts"
                    options={{
                        drawerLabel: "Контакты",
                        title: "Контакты",
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.titleStyle
                    }}
                    component={ContactsScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 12,
        marginTop: Platform.OS === "android" ? 30 : 0
    },
    drawerButton: {
        paddingVertical: 12,
        paddingLeft: 30,
        paddingRight: 12
    },
    drawerLabelStyle: {
        color: Color.white,
        fontSize: 18,
    },
    drawerLogo: {
        marginVertical: 30,
        marginLeft: 10
    },
    titleStyle: {
        color: Color.white,
        fontSize: 20,
        fontWeight: "700"
    },
    flex: {flex: 1}
})