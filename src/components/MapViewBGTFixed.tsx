import React from "react";
import MapView, {Marker} from "react-native-maps";
import {Platform} from "react-native";
import {RegionProps} from "../constants/types";

export const MapViewBGTFixed = React.memo(() => {
    const region: RegionProps = {
        latitude: 53.88319618614656,
        longitude: 27.47913406993698,
        latitudeDelta: 0.001,
        longitudeDelta: Platform.OS === "android" ? 0.0042 : 0.005
    }

    return (
        <MapView
            pitchEnabled={false}
            zoomEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={{height: 200, width: "100%"}}
            region={region}
        >
            <Marker
                coordinate={region}
                title={"Белгазтехника"}
                description={"ул.Гурского, д.30"}
            />
        </MapView>
    )
});