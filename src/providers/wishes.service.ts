import { Injectable } from '@angular/core';
import { List } from '../models';

@Injectable()
export class WhishesService {

    listas: List[] = [];

    constructor() {

        // console.log('Deseos services Initial');

        //     const list1 = new List('Buscar pasajes para navidad');
        //     const list2 = new List('Buscar donde irse y no pasar navidad aqui en la casa');
    
        //     this.listas.push(list1, list2);
    
        //     console.log(this.listas);

        this.cargarStorage();
    }

    agregarLista( lista: List) {
        this.listas.push ( lista );

        this.guardarStorage();
    }

    guardarStorage() {
        localStorage.setItem('data', JSON.stringify (this.listas) );
    }

    cargarStorage() {

        if ( localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        } else {
            this.listas = [];
        }
    }
}