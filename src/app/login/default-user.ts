import { User } from './user';
export let DefaultUser: User ={
		name: '',
		rame: '',
		password: '',
		level: 0,
		cards: [],
		email: '',
		address: '',
		extend: {}
	}

export let DefaultUsers: User[] = [
	{
		name: 'hdAdmin',
		rame: 'petter',
		password: 'hdAdmin',
		level: 10,
		cards: ['6212261598245125963248', '6212261598245125988948'],
		email: '390778266@qq.com',
		address: '四川省成都市新都区',
		extend: {}
	},
	{
		name: 'lee999',
		rame: 'lee',
		password: 'lee999',
		level: 20,
		cards: ['62567891598245125963248', '621222261598245125988948'],
		email: '390778266@qq.com',
		address: '四川省成都市新都区',
		extend: {}
	}
]
