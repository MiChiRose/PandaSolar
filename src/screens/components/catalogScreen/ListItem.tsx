import React, {memo} from "react";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {Color} from "../../../constants/color";
import {ListItemProps} from "../../../constants/types";
import {SmallGradientButton} from "../../../components/SmallGradientButton";

const ListItem = ({
                      image,
                      title,
                      onPress,
                      pressDetailsButton,
                      disabled,
                      showDetailsButton = false
                  }: ListItemProps): JSX.Element => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
            <Image source={{uri: image}} resizeMode={"contain"} style={styles.imageUrl}/>
            <View style={styles.detailsContainer}>
                <Text style={{width: "100%"}}>{title}</Text>
                {showDetailsButton &&
                    <SmallGradientButton
                        disabled={false}
                        onPress={pressDetailsButton}
                        text={"Подробнее"}
                    />
                }
            </View>
        </TouchableOpacity>
    );
}

export default memo(ListItem);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.listItem,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    imageUrl: {
        height: 75,
        width: 110,
        marginRight: 15,
    },
    detailsContainer: {
        height: "100%",
        flex: 1,
        justifyContent: "space-evenly",
    },
})