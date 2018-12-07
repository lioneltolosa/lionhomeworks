import { ListItem } from './list-item.model';

export class List {
    id: Number;
    title: String;
    createIn: Date;
    finishIn: Date;
    finish: Boolean;
    items: ListItem[];

    constructor( title: String ) {
        this.title = title;

        this.finish = false;
        this.createIn = new Date();
        this.items = [];

        this.id = new Date().getTime();
    }
}