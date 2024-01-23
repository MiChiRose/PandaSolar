import { PriceList } from '../constants/types';

const onPriceRowPress = (
  index: number,
  array: PriceList[],
  setArray: (array: PriceList[]) => void
) => {
  const returnedArray = [...array];
  returnedArray[index].show = !returnedArray[index].show;
  setArray(returnedArray);
};

export { onPriceRowPress };
