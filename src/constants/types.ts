import {StyleProp, ViewStyle} from "react-native";

export type getDataProps = {
    mainPath: string;
    documentPath: string;
}

export type HomeScreenProps = {
    navigation: any
}

export type HomeScreenItemProps = {
    image: string;
    text: string;
    last: boolean;
    onPress: () => void;
};

export type HomeScreenDropdownInfoProps = {
    data: IData[];
};

export type CatalogProductDetailScreenProps = {
    route?: any;
}

export type CatalogDetailScreenProps = {
    route?: any;
    navigation?: any;
}

export type ScrollViewProps = {
    children: JSX.Element | JSX.Element[];
    refresh?: () => void;
    refreshing?: boolean
}

export type ContactsMenuItemProps = {
    data: Array<any>;
    image: any;
}

export type ContactsData = {
    header: string;
    title: string;
    phone?: string
    fax?: string;
    headOfDept?: string;
    email?: string;
}

export type CatalogScreenProps = {
    navigation: any;
}

export type ICatalog = {
    id: string;
    image: string;
    title: string;
    data: any[];
}

export type IData = {
    id: string;
    image: string;
    link: string;
    title: string
}

export type IService = {
    id: string;
    title: string;
    image: string;
    link: any;
};

export type ProductButtonProps = {
    disabled: boolean;
    onPress?: () => void;
    text: string;
    style?: StyleProp<ViewStyle>
};

export type ListItemProps = {
    id: string,
    image: any,
    title: string,
    onPress?: () => void,
    disabled?: boolean;
    showDetailsButton?: boolean
    pressDetailsButton?: () => void;
    data: ListItemProductProps[] | [];
}

export type ListItemProductProps = {
    id: string,
    image: any,
    title: string,
    about: string,
    link: string,
    disabled?: boolean;
    pressDetailsButton?: () => void;
    pressOrderButton?: () => void;
}

export type RegionProps = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

export type DropdownProps = {
    show: boolean;
    setShow: (val: boolean) => void;
    children: JSX.Element;
    title: string;
}