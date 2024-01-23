import dataBase from '../../Firebase/fireStoreLocal';
import { getDoc, doc } from 'firebase/firestore';

type DataLoadProps = {
  path: string;
  isLoading: (bool: boolean) => void;
};

const getData = async ({ mainPath = 'main', documentPath }) => {
  const docRef = doc(dataBase, mainPath, documentPath);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return JSON.parse(JSON.stringify(docSnap.data()));
  } else {
    console.log('There is no data');
  }
};

const dataLoad = async ({ path, isLoading }: DataLoadProps): any => {
  isLoading(true);
  try {
    const resp = await getData({ documentPath: path });
    if (resp) {
      isLoading(false);
      return resp;
    } else {
      isLoading(false);
      return {};
    }
  } catch (e) {
    isLoading(false);
    console.log(e);
  }
};

export { dataLoad };
