import React from "react";
import {View, StyleSheet} from "react-native";
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";
import {Color} from "../../../constants/color";

export const PaginationItem: React.FC<{
    index: number
    backgroundColor: string
    length: number
    animValue: Animated.SharedValue<number>
    isRotate?: boolean
}> = (props) => {
    const {animValue, index, length, backgroundColor, isRotate} = props;
    const width = 10;

    const animStyle = useAnimatedStyle(() => {
        let inputRange = [index - 1, index, index + 1];
        let outputRange = [-width, 0, width];

        if (index === 0 && animValue?.value > length - 1) {
            inputRange = [length - 1, length, length + 1];
            outputRange = [-width, 0, width];
        }

        return {
            transform: [
                {
                    translateX: interpolate(
                        animValue?.value,
                        inputRange,
                        outputRange,
                        Extrapolate.CLAMP,
                    ),
                },
            ],
        };
    }, [animValue, index, length]);
    return (
        <View style={[styles.container, {width, height: width, transform: [{rotateZ: isRotate ? "90deg" : "0deg"}]}]}>
            <Animated.View
                style={[{ backgroundColor }, styles.dotContainer ,animStyle]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        backgroundColor: Color.white,
        borderRadius: 50,
    },
    dotContainer: {
        borderRadius: 50,
        flex: 1,
    }
})