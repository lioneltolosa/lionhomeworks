import { Component } from '@angular/core';
import { WhishesService } from '../../providers/wishes.service';
import { List } from '../../models/list.model';
import { NavController, AlertController } from 'ionic-angular';
import { AddPage } from '../add/add.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pending.components.html'
})

export class PendingPage {

    constructor( public whishesService: WhishesService,
                 private navCtrl: NavController,
                 private alertCtrl: AlertController) {

    }
 
    itemSelected( list: List) {
        console.log(list);
    }

    // addList() {
    //     this.navCtrl.push( AddPage )
    // }

    showPrompt() {
        const prompt = this.alertCtrl.create( {
            title: 'New List',
            message: "Name the new list",
            inputs: [
                {
                  name: 'title',
                  placeholder: 'Name the list'
                },
            ],
            buttons: [
                {
                  text: 'Cancel',
                  handler: data => {
                    console.log('Cancel');
                  }
                },
                {
                  text: 'Save',
                  handler: data => {
                    console.log(data);

                    if ( data.title.length === 0 ) {
                        return;
                    }
                    this.navCtrl.push( AddPage, {
                        title: data.title
                    })
                  }
                }
              ]
        });
        prompt.present();
    }
}