import React from "react";
import {View, Image, StyleSheet} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import {useSharedValue} from "react-native-reanimated";
import {PaginationItem} from "./PaginationItem";
import {width} from "../../../constants/deviceParam";
import {carouselSlots} from "../../../constants/data";
import {Color} from "../../../constants/color";

export const CarouselHome = (): JSX.Element => {
    const progressValue = useSharedValue<number>(0)
    return (
        <View style={styles.container}>
            <Carousel
                loop
                pagingEnabled={true}
                snapEnabled={true}
                autoPlay={true}
                autoPlayInterval={5000}
                width={width - 50}
                height={(width - 50) / 1.65}
                mode="vertical-stack"
                modeConfig={{}}
                onProgressChange={(_, absoluteProgress) =>
                    (progressValue.value = absoluteProgress)
                }
                data={carouselSlots}
                scrollAnimationDuration={1000}
                renderItem={({item}: { item: string, index: number }) => (
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            //@ts-ignore
                            source={item}
                            resizeMode={"contain"}
                        />
                    </View>
                )}
            />
            <View style={styles.dotContainer}>
                {carouselSlots.map((item, index) => {
                    return (
                        <PaginationItem
                            backgroundColor={Color.black}
                            animValue={progressValue}
                            index={index}
                            key={index}
                            length={carouselSlots.length}
                        />
                    );
                })}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        borderRadius: 15
    },
    dotContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100,
        alignSelf: "center",
        marginTop: 10
    },
    imageContainer: {
        backgroundColor: Color.transparent,
        flex: 1,
        justifyContent: "center",
    },
    image: {
        width: "100%",
        flex: 1,
        borderRadius: 15
    }
})
