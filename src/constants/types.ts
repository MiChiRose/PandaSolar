type RulesType = {
  image: string;
  text: string;
};

type PriceList = {
  data: PriceData[];
  header: string;
  show?: boolean;
};

type PriceData = {
  title: string;
  price: string;
};

export { RulesType, PriceList, PriceData };
