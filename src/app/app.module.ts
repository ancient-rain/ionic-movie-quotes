import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { QuoteDetailPageModule } from "../pages/quote-detail/quote-detail.module";
import { ListPageModule } from "../pages/list/list.module";
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCFIsK-89kcIEUB-cxxRL8sth3UhWIaxdQ",
  authDomain: "bednartd-ionic-movie-quotes.firebaseapp.com",
  databaseURL: "https://bednartd-ionic-movie-quotes.firebaseio.com",
  projectId: "bednartd-ionic-movie-quotes",
  storageBucket: "bednartd-ionic-movie-quotes.appspot.com",
  messagingSenderId: "194019125509"
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    QuoteDetailPageModule,
    ListPageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
