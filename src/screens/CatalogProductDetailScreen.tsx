import React, {memo} from "react";
import * as WebBrowser from "expo-web-browser";
import Container from "../components/Container";
import {CustomScrollView} from "../components/CustomScrollView";
import ListItemProduct from "./components/catalogScreen/ListItemProduct";
import {CatalogProductDetailScreenProps, ListItemProductProps} from "../constants/types";

const CatalogProductDetailScreen = ({route}: CatalogProductDetailScreenProps): JSX.Element => {
    const data: ListItemProductProps[] = route.params.data;
    return (
        <Container>
            <CustomScrollView>
                {data?.map((item: ListItemProductProps) => (
                    <ListItemProduct
                        key={item.id}
                        disabled={!item.link}
                        pressDetailsButton={() => WebBrowser.openBrowserAsync(item.link)}
                        pressOrderButton={() => console.log("Press Order Button")}
                        {...item}
                    />
                ))}
            </CustomScrollView>
        </Container>
    )
}

export default memo(CatalogProductDetailScreen);