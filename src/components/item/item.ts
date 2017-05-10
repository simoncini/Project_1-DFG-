
export class Item {
	ID: string;
	name: string;
	description: string;
  icon: string;

	constructor(id:string , name: string, description: string , icon: string ){
		this.ID = id;
		this.name = name;
		this.description = description;
		this.icon = icon;
	}

}
