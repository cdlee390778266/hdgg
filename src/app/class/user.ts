import { Apply } from './apply';

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
  ID?: string;
  applyList?: Apply[]
}