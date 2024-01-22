import {StyleProp, ViewStyle} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Color} from "../constants/color";

interface GradientProps {
    children?: JSX.Element | JSX.Element[];
    style?: StyleProp<ViewStyle>
}

export const Gradient = ({children, style}: GradientProps): JSX.Element => {
    return (
        <LinearGradient colors={[Color.mainBlue, Color.detailsButton]} style={[style]}>
            {children}
        </LinearGradient>
    )
}