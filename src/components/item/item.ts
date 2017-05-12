
export class Item {
	ID: string;
	name: string;
	char:string;
	stats4: string;
  icon: string;

	constructor(id:string , name: string, char:string ,stats4: string , icon: string ){
		this.ID = id;
		this.name = name;
		this.char = char;
		this.stats4 = stats4;
		this.icon = icon;
	}

}
