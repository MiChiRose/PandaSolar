import { Linking } from 'react-native';

const checkLink = (link: string = ''): boolean => {
  return !!link && Linking.canOpenURL(link);
};

export { checkLink };
