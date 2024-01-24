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

type ContactsAddressType = {
  address: string;
  header: string;
};

type ContactsPhone = {
  image: string;
  phone: string;
};

type ContactsSocialWeb = {
  image: string;
  link?: string;
};

type ContactsSocial = {
  header: string;
  instagram: ContactsSocialWeb;
  vk: ContactsSocialWeb;
  telegram: ContactsSocialWeb;
};

type ContactsType = {
  header: string;
  address: ContactsAddressType;
  phoneFirst: ContactsPhone;
  phoneSecond: ContactsPhone;
  social: ContactsSocial;
};

type NewsType = {
  image: string;
  title: string;
  link?: string;
};

type InviteAddress = {
  address: string;
  title: string;
};

type InviteHours = {
  time: string;
  title: string;
};

type InviteType = {
  header: string;
  title: string;
  subtitle: string;
  address: InviteAddress;
  hours: InviteHours;
};

export { RulesType, PriceList, PriceData, ContactsType, NewsType, InviteType };
