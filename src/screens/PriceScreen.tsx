import React, {memo, useEffect, useState} from "react";
import Spinner from "react-native-loading-spinner-overlay";
import * as WebBrowser from "expo-web-browser";
import Container from "../components/Container";
import ListItem from "./components/catalogScreen/ListItem";
import {CustomScrollView} from "../components/CustomScrollView";
import {getData} from "../components/data";
import {IService} from "../constants/types";

const ServicesScreen = () => {
    const [serviceData, setServicesData] = useState<IService[]>([]);
    const [loading, isLoading] = useState(false);

    const dataLoad = () => {
        isLoading(true);
        getData({mainPath: "main", documentPath: "services"})
            .then((resp) => {
                setServicesData(resp[0]);
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
                {serviceData.map((item) => (
                    <ListItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        disabled={true}
                        showDetailsButton={true}
                        pressDetailsButton={() => WebBrowser.openBrowserAsync(item.link)}
                        data={[]}
                    />
                ))}
            </CustomScrollView>
            <Spinner visible={loading}/>
        </Container>
    );
}

export default memo(ServicesScreen)