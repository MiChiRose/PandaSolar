import React, {memo, useEffect, useState} from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Container from "../components/Container";
import {MapViewBGTFixed} from "../components/MapViewBGTFixed";
import {CustomScrollView} from "../components/CustomScrollView";
import {getData} from "../components/data";
import {ContactsData, ContactsMenuItemProps} from "../constants/types";

const MenuItem = ({data, image}: ContactsMenuItemProps): JSX.Element => {
    return (
        <View style={styles.menuItemContainer}>
            {data.map((element, index) => (
                <View style={styles.dataContainer} key={index}>
                    <View>
                        {index === 0 ? <Image
                            source={image}
                            style={styles.image}
                        /> : <View style={styles.image}/>}
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.textHeader}>{element.header}</Text>
                        {element.title && <Text style={styles.textTitle}>{element.title}</Text>}
                        {element.phone && <Text style={styles.textTitle}>{element.phone}</Text>}
                        {element.fax && <Text style={styles.textTitle}>{element.fax}</Text>}
                        {element.email && <Text style={styles.textTitle}>{element.email}</Text>}
                        {element.headOfDept && <Text style={styles.textTitle}>{element.headOfDept}</Text>}
                    </View>
                </View>
            ))}
        </View>
    )
}

const ContactsScreen = (): JSX.Element => {
    const [addressData, setAddressData] = useState<ContactsData[]>([]);
    const [contactsData, setContactsData] = useState<ContactsData[]>([]);
    const [loading, isLoading] = useState(false);

    const dataLoad = () => {
        isLoading(true);
        getData({mainPath: "main", documentPath: "contacts"})
            .then((resp) => {
                setAddressData(resp[0]);
                setContactsData(resp[1]);
                isLoading(false);
            })
            .catch((e) => {
                isLoading(false);
                console.log(e);
            });
    }

    useEffect(() => {
        dataLoad()
    }, []);

    return (
        <Container>
            <CustomScrollView refreshing={loading} refresh={dataLoad}>
                <MapViewBGTFixed/>
                <MenuItem
                    data={addressData}
                    image={require("../../assets/address/address_gradient.png")}
                />
                <MenuItem
                    data={contactsData}
                    image={require("../../assets/phone/phone_gradient.png")}
                />
            </CustomScrollView>
            <Spinner visible={loading}/>
        </Container>
    );
}

export default memo(ContactsScreen);

const styles = StyleSheet.create({
    image: {
        marginRight: 30,
        height: 50,
        width: 50
    },
    menuItemContainer: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
        flexDirection: "column"
    },
    dataContainer: {
        marginBottom: 10,
        flexDirection: "row"
    },
    textHeader: {
        fontSize: 14,
        fontWeight: "700"
    },
    textTitle: {
        fontSize: 14,
        fontWeight: "400"
    },
    flex: {
        flex: 1
    }
})