import { Component } from '@angular/core';
import { WhishesService } from '../../providers/wishes.service';

@Component({
  selector: 'page-finish',
  templateUrl: 'finish.components.html'
})
export class FinishPage {

  constructor(public whishesService: WhishesService) {}

}
