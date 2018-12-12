import { Component } from '@angular/core';
import { WhishesService } from '../../providers/wishes.service';
import { NavParams } from 'ionic-angular';
import { List, ListItem} from '../../models';

@Component({
    selector: 'page-add',
    templateUrl: 'add.component.html'
})

export class AddPage {

    lista: List;
    nameItem: String = '';

    constructor( public whishesService: WhishesService,
                 private navParams: NavParams ) {
        console.log(this.navParams.get('title'));

        // this.newItems = this.navParams.get('title');

        const title = this.navParams.get('title');
        this.lista = new List( title );
    }

    addItem() {
        if ( this.nameItem.length === 0 ) {
            return;
        }
        const newItem = new ListItem (this.nameItem);
        this.lista.items.push( newItem)
        this.nameItem = '';
    }

    actualizarTarea(item: ListItem) {
        item.complete = !item.complete;
    }
}