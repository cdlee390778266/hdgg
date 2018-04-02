import { User } from '../class/user';
import { SysStatus } from '../class/sys.status';

export interface HdStateInterface extends User, SysStatus {}

export const InitialState: HdStateInterface = {
    version: '',
    dsc: '',
    isLogin: true,
    isLoading: false,
    uid: 99,
    name: 'hdAdmin',
    nname: '就回来了',
    rname: 'eefa',
    password: 'hdAdmin',
    level: 10,
    cards: ['6212261598245125963248', '6212261598245125988948'],
    email: '390778266@qq.com',
    address: '四川省成都市新都区',
    phone: 13684054803,
    record: 100
}