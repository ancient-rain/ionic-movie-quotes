import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuoteDetailPage } from "../quote-detail/quote-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushNewPage(): void {
    console.log('push a page');
    this.navCtrl.push(QuoteDetailPage);
  }
}
