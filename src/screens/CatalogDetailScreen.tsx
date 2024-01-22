import React, {memo} from "react";
import Container from "../components/Container";
import ListItem from "./components/catalogScreen/ListItem";
import {CustomScrollView} from "../components/CustomScrollView";
import {CatalogDetailScreenProps, ListItemProps} from "../constants/types";

const CatalogDetailScreen = ({route, navigation: {navigate}}: CatalogDetailScreenProps): JSX.Element => {
    const data = route.params.data;
    return (
        <Container>
            <CustomScrollView>
                {data?.map((item: ListItemProps) => (
                    <ListItem
                        {...item}
                        key={item.id}
                        onPress={() => navigate("CatalogProductDetails", {data: item.data, name: item.title})}
                        disabled={!item.data.length}
                    />
                ))}
            </CustomScrollView>
        </Container>
    )
}

export default memo(CatalogDetailScreen);