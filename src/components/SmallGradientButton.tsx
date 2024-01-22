import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {ProductButtonProps} from "../constants/types";
import {Gradient} from "./Gradient";
import {Color} from "../constants/color";

export const SmallGradientButton = ({ disabled, text, onPress, style }: ProductButtonProps) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.flex, style]}
            activeOpacity={0.8}
        >
            <Gradient style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>{text}</Text>
            </Gradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    detailsButton: {
        flex: 1,
        marginTop: 15,
        backgroundColor: Color.detailsButton,
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: "center"
    },
    detailsButtonText: {
        color: Color.white
    },
    flex: {
        flex: 1
    },
})