import { Component } from '@angular/core';
import { WhishesService } from '../../providers/wishes.service';
import { List } from '../../models/list.model';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pending.components.html'
})

export class PendingPage {

    constructor( public whishesService: WhishesService) {

    }
 
    itemSelected( list: List) {
        console.log(list);
    }

}