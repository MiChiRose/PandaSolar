import dataBase from '../../Firebase/firestore';
import { getDoc, doc } from 'firebase/firestore';

export const getData = async ({ mainPath = 'main', documentPath }) => {
  const docRef = doc(dataBase, mainPath, documentPath);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return JSON.parse(JSON.stringify(docSnap.data()));
  } else {
    console.log('There is no data');
  }
};
