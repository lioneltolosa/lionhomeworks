import { Component, Input } from '@angular/core';
import { WhishesService } from '../../providers/wishes.service';
import { NavController } from 'ionic-angular';
import { List } from '../../models';
import { AddPage } from '../../pages/add/add.component';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.html'
})
export class ListasComponent {

  @Input() terminada: Boolean = false;

  constructor( private whishesService: WhishesService,
               private navCtrl: NavController) {
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

}
