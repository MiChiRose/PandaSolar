import {ScrollView, RefreshControl, View} from "react-native";
import {ScrollViewProps} from "../constants/types";

export const CustomScrollView = ({children, refresh, refreshing}: ScrollViewProps) => {
    return (
        <ScrollView
            style={{paddingHorizontal: 25, paddingTop: 25}}
            refreshControl={
                <RefreshControl
                    enabled={refreshing}
                    refreshing={refreshing ? refreshing : false}
                    onRefresh={refresh}
                />
            }
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={{paddingBottom: 30}}>
                {children}
            </View>
        </ScrollView>
    );
}