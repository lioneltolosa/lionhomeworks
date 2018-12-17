import { Component, Input } from '@angular/core';
import { WhishesService } from '../../providers/wishes.service';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { List } from '../../models';
import { AddPage } from '../../pages/add/add.component';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.html'
})
export class ListasComponent {

  @Input() terminada: Boolean = false;

  constructor( private whishesService: WhishesService,
               private navCtrl: NavController,
               private alertController: AlertController) {
  }
  
  itemSelected( lista: List) {
    console.log(lista);

    this.navCtrl.push( AddPage, {
        title: lista.title,
        lista: lista
    })
}

  borrarLista(lista: List) {
      this.whishesService.borrarLista( lista );
  }

  editarList (lista: List, slidingItem: ItemSliding) {
    
    slidingItem.close();

    const prompt = this.alertController.create( {
      title: 'Edit Name',
      message: "Edit name the list",
      inputs: [
          {
            name: 'title',
            placeholder: 'Name the list',
            value: lista.title
          }],
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

              lista.title = data.title;
              this.whishesService.guardarStorage();
            }
          }
        ]
  });
  prompt.present();
  }

}
