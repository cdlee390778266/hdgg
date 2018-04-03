export class Ad {
	uid: number;
	name: string;
	status:string;
	url: string
}

export class AdList {
	adid: boolean;
	title: string;
	dsc: string;
	imgsrc: string;
	price: string;
	num: number;
	banners?: Ad[] 
}