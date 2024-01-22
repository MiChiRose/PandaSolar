import React from "react";
import * as WebBrowser from "expo-web-browser";
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Color} from "../../../constants/color";
import {HomeScreenDropdownInfoProps, HomeScreenItemProps} from "../../../constants/types";

const ItemContainer = ({image, text, last, onPress}: HomeScreenItemProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.itemContainer, {marginBottom: last ? 0 : 20}]}>
            <Image resizeMode={"contain"} source={{uri: image}} style={styles.itemImage}/>
            <Text style={styles.itemText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export const HomeScreenDropdownInfo = ({ data }: HomeScreenDropdownInfoProps) => {
    return (
        <View>
            {data.map((item, index) => {
                return (
                    <ItemContainer
                        key={item.id}
                        image={item.image}
                        text={item.title}
                        last={index + 1 === data.length}
                        onPress={() => WebBrowser.openBrowserAsync(item.link)}
                    />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
    },
    itemImage: {
        width: 122,
        height: 85
    },
    itemText: {
        flex: 1,
        fontSize: 16,
        color: Color.detailsButton,
        marginLeft: 18
    }
});