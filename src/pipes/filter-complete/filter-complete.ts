import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models/list.model';

@Pipe({
  name: 'filterComplete',
  pure: false
})
export class FilterCompletePipe implements PipeTransform {

  transform(listas: List[], completada: boolean) {

    return listas.filter ( lista => {
      return lista.finish === completada
    });
  }
}
