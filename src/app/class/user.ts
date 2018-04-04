import { Apply } from './apply';
import { Order } from './order';
import { Ad } from './ad';
import { Person} from './person';
import { Oa } from './oa'

export class User {
  uid?: number;
  name?: string;
  nname?: string;
  rname?: string;
  password?: string;
  level?: number;
  cards?: Array<string>;
  email?: string;
  address?: string;
  phone?: number;
  record?: number;
  isJoinTeam?: boolean;
  qqAccount?: number;
  wxAccount?: string;
  mmAccount?: string;
  wbAccount?: string;
  zfbReceiveId?: number;
  qqReceiveId?: string;
  wxReceiveId?: string;
  yhkReceiveId?: string;
  ID?: string;
  applyList?: Apply[];
  orderList?: Order[];
  adList?: Ad[];
  contactList?: Person[];
  oa?: Oa;
  isSign?: boolean;
}