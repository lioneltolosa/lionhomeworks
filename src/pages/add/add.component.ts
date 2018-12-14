import { Component } from '@angular/core';
import { WhishesService } from '../../providers/wishes.service';
import { NavParams } from 'ionic-angular';
import { List, ListItem} from '../../models';

@Component({
    selector: 'page-add',
    templateUrl: 'add.component.html',
    styles: [`
        ion-item-options .button:last-child {
            padding: 0 !important;
        }
    `]
})

export class AddPage {

    lista: List;
    nameItem: String = '';

    constructor( public whishesService: WhishesService,
                 private navParams: NavParams ) {

        // console.log(this.navParams.get('title'));

        // this.newItems = this.navParams.get('title');

        const title = this.navParams.get('title');

        if ( this.navParams.get ('lista')) {
            this.lista = this.navParams.get ('lista');
        } else {
            this.lista = new List( title );
            this.whishesService.agregarLista ( this.lista )
        }
    }

    addItem() {
        if ( this.nameItem.length === 0 ) {
            return;
        }
        const newItem = new ListItem (this.nameItem);
        this.lista.items.push( newItem )
        this.whishesService.guardarStorage();
        this.nameItem = '';

        // localStorage.setItem('data', JSON.stringify ( this.lista ));
    }

    actualizarTarea(item: ListItem) {
        item.complete = !item.complete;
    }

    borrarItem(idx : number) {
        this.lista.items.splice( idx, 1 );
    }
}