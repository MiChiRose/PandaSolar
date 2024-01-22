import React, {memo} from "react";
import {Image, Text, StyleSheet, View} from "react-native";
import {Color} from "../../../constants/color";
import {ListItemProductProps} from "../../../constants/types";
import {SmallGradientButton} from "../../../components/SmallGradientButton";

const ListItemProduct = ({
                             image,
                             title,
                             about,
                             pressDetailsButton,
                             pressOrderButton,
                             disabled,
                         }: ListItemProductProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{title}</Text>
            <View style={styles.rowAlign}>
                <Image source={{uri: image}} resizeMode={'contain'} style={styles.imageUrl}/>
                <Text style={styles.flex}>{about}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.rowAlign}>
                    <SmallGradientButton
                        disabled={disabled ?? false}
                        //@ts-ignore
                        onPress={pressOrderButton}
                        text={"Заказать"}
                    />
                    <View style={styles.spaceBetween}/>
                    <SmallGradientButton
                        disabled={disabled ?? false}
                        //@ts-ignore
                        onPress={pressDetailsButton}
                        text={"Подробнее"}
                    />
                </View>
            </View>
        </View>
    );
}

export default memo(ListItemProduct);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.listItem,
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    header: {
        flex: 1,
        textAlign: "center",
        marginBottom: 15,
        color: Color.detailsButton,
        fontWeight: "500",
        fontSize: 16
    },
    imageUrl: {
        height: 75,
        width: 110,
        marginRight: 15,
    },
    detailsContainer: {
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    flex: {
        flex: 1
    },
    spaceBetween: {
        marginHorizontal: 5
    },
    rowAlign: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    }
})