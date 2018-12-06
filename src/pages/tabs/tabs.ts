import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { PendingPage } from '../pending/pending.components';
import { FinishPage } from '../finish/finish.components';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = PendingPage;
  tab4Root = FinishPage;

  constructor() {

  }
}
