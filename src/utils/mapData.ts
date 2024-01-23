import { PriceList } from '../constants/types';

const mapPriceListData = (it: PriceList) => {
  return { ...it, show: true };
};

export { mapPriceListData };
