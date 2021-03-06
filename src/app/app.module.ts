import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Components
import { PendingPage } from '../pages/pending/pending.components';
import { FinishPage } from '../pages/finish/finish.components';
import { AddPage } from '../pages/add/add.component';
import { ListasComponent } from '../components/listas/listas';


// Services
import { WhishesService } from '../providers/wishes.service';

// Pipes
import { FilterCompletePipe } from '../pipes/filter-complete/filter-complete';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingPage,
    FinishPage,
    AddPage,
    FilterCompletePipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingPage,
    FinishPage,
    AddPage,
    ListasComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WhishesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
