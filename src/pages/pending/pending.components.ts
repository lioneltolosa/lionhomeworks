import { Component, Input } from '@angular/core';
import { WhishesService } from '../../providers/wishes.service';
import { List } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { AddPage } from '../add/add.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pending.components.html',
    styles: [`
        ion-item-options .button:last-child {
            padding: 0 !important;
        }
    `]
})

export class PendingPage {

    // @Input: 

    constructor( public whishesService: WhishesService,
                 private navCtrl: NavController,
                 private alertCtrl: AlertController) {
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