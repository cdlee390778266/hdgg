import { Extend } from './extend';
export class User {
	uid: number;
	name: string;
	nname: string;
	rname: string;
	password: string;
	level: number;
	cards: Array<string>;
	email: string;
	address: string;
	extend: Extend;
}
