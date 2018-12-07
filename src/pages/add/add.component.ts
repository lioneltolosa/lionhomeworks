import { Component } from '@angular/core';
import { WhishesService } from '../../providers/wishes.service';
import { NavParams } from 'ionic-angular';
import { List } from '../../models/list.model';

@Component({
    selector: 'page-add',
    templateUrl: 'add.component.html'
})

export class AddPage {

    newItems: List;

    constructor( public whishesService: WhishesService,
                 private navParams: NavParams ) {
        console.log(this.navParams.get('title'));

        // this.newItems = this.navParams.get('title');

        const title = this.navParams.get('title');
        this.newItems = new List( title );
    }

}