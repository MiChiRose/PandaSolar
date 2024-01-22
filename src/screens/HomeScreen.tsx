import React, {memo, useEffect, useState} from "react";
import {Text} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import GradientButton from "../components/GradientButton";
import {CarouselHome} from "./components/homeScreen/Carousel";
import Container from "../components/Container";
import DropdownItem from "./components/homeScreen/DropdownItem";
import {CustomScrollView} from "../components/CustomScrollView";
import {HomeScreenDropdownInfo} from "./components/homeScreen/HomeScreenDropdownInfo";
import {getData} from "../components/data";
import {HomeScreenProps, ICatalog, IData} from "../constants/types";
import {aboutCompanyText} from "../constants/data";

const HomeScreen = ({navigation: {navigate}}: HomeScreenProps) => {
    const [showServices, setShowServices] = useState<boolean>(false);
    const [showAbout, setShowAbout] = useState<boolean>(false);
    const [showNews, setShowNews] = useState<boolean>(false);

    const [newsData, setNewsData] = useState<IData[]>([]);
    const [servicesData, setServicesData] = useState<IData[]>([]);
    const [catalogData, setCatalogData] = useState<ICatalog[]>([]);
    const [loading, isLoading] = useState(false);

    const dataLoad = () => {
        isLoading(true);
        Promise.all([
            getData({mainPath: "main", documentPath: "news"}),
            getData({mainPath: "main", documentPath: "services"}),
            getData({mainPath: "main", documentPath: "catalog"})
        ])
            .then((resp) => {
                setNewsData(resp[0][0]);
                setServicesData(resp[1][0]);
                setCatalogData(resp[2][0]);
                isLoading(false);
            })
            .catch((e) => {
                isLoading(false);
                console.log(e);
            });
    }

    useEffect(() => {
        dataLoad()
    }, []);

    const buttons = [
        {
            title: "Арматура",
            onPress: () => navigate("CatalogDetails", {data: catalogData[3].data, name: catalogData[3].title})
        },
        {
            title: "Приборы и устройства",
            onPress: () => navigate("CatalogDetails", {data: catalogData[0].data, name: catalogData[0].title})
        },
        {
            title: "Оборудование для систем газоснабжения",
            onPress: () => navigate("CatalogProductDetails", {data: catalogData[1].data, name: catalogData[1].title})
        },
        {
            title: "Технологическое оборудование для ГНС и АЗС",
            onPress: () => navigate("CatalogDetails", {data: catalogData[2].data, name: catalogData[2].title})
        }
    ];

    return (
        <Container>
            <CustomScrollView refreshing={loading} refresh={dataLoad}>
                <CarouselHome/>
                <>
                    {buttons.map((item, index) => (
                        <GradientButton
                            key={index}
                            text={item.title}
                            onPress={item.onPress}
                            style={{marginBottom: 30}}
                        />
                    ))}
                </>
                <DropdownItem
                    title={"Предоставляемые услуги"}
                    show={showServices}
                    setShow={setShowServices}
                    children={<HomeScreenDropdownInfo data={servicesData}/>}
                />
                <DropdownItem
                    title={"О Компании"}
                    show={showAbout}
                    setShow={setShowAbout}
                    children={<Text>{aboutCompanyText.text}</Text>}
                />
                <DropdownItem
                    title={"Новости"}
                    show={showNews}
                    setShow={setShowNews}
                    children={<HomeScreenDropdownInfo data={newsData}/>}
                />
            </CustomScrollView>
            <Spinner visible={loading}/>
        </Container>
    );
}

export default memo(HomeScreen)