
export class Character {
	name: string;
	items: Array<String>;
	reinforcements: Array<String>;

	constructor(name: string, items: Array<String>, reinforcements: Array<String> ){
		this.name = name;
		this.items = items;
		this.reinforcements = reinforcements;

	}

}
