import React, {memo, useEffect, useState} from "react";
import Spinner from "react-native-loading-spinner-overlay";
import Container from "../components/Container";
import ListItem from "./components/catalogScreen/ListItem";
import {CustomScrollView} from "../components/CustomScrollView";
import {getData} from "../components/data";
import {CatalogScreenProps, ICatalog} from "../constants/types";

const CatalogScreen = ({navigation: {navigate}}: CatalogScreenProps) => {
    const [catalog, setCatalog] = useState<ICatalog[]>([]);
    const [loading, isLoading] = useState(false);

    const dataLoad = () => {
        isLoading(true);
        getData({mainPath: "main", documentPath: "catalog"})
            .then((resp) => {
                setCatalog(resp[0]);
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
                {catalog.map((item) => (
                    <ListItem
                        key={item.id}
                        id={item.id}
                        data={[]}
                        image={item.image}
                        title={item.title}
                        onPress={() => navigate(+item.id === 2 ? "CatalogProductDetails" : "CatalogDetails", {
                            data: item.data,
                            name: item.title
                        })}
                        disabled={!item.data.length}
                    />
                ))}
            </CustomScrollView>
            <Spinner visible={loading}/>
        </Container>
    );
}

export default memo(CatalogScreen);