import React, {memo} from "react";
import {Platform, SafeAreaView, StyleSheet} from "react-native";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const Container = ({children}: Props): JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

export default memo(Container);

const styles = StyleSheet.create({
    container: {flex: 1}
})