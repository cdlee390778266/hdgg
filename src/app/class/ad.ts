export class AdDetail {
	uid?: number;
	name?: string;
	status?:string;
	url?: string;
	thumbUrl?: string;
}

export class Ad {
	adid?: number;
	title?: string;
	dsc?: string;
	imgsrc?: string;
	price?: string;
	num?: number;
	banners?: AdDetail[] 
}