import { ListItem } from './list-item.model';

export class List {
    id: number;
    title: string;
    createIn: Date;
    finishIn: Date;
    finish: boolean;
    items: ListItem[];

    constructor( title: string ) {
        this.title = title;

        this.finish = false;
        this.createIn = new Date();
        this.items = [];

        this.id = new Date().getTime();
    }
}