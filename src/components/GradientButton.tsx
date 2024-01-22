import React, {memo} from "react";
import {StyleSheet, TouchableOpacity, Text, ViewStyle, StyleProp} from "react-native";
import {Gradient} from "./Gradient";
import {Color} from "../constants/color";

interface ButtonProps {
    text: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

const GradientButton = ({text, onPress, style}: ButtonProps): JSX.Element => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
        >
            <Gradient style={[styles.container, {paddingHorizontal: 25}]}>
                <Text style={styles.text}>{text}</Text>
            </Gradient>
        </TouchableOpacity>
    );
}

export default memo(GradientButton)

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    text: {
        color: Color.white,
        fontWeight: "500",
        fontSize: 18,
        textAlign: "center"
    }
});