import { Component } from '@angular/core';

import { PendingPage } from '../pending/pending.components';
import { FinishPage } from '../finish/finish.components';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingPage;
  tab2Root = FinishPage;

  constructor() {

  }
}
