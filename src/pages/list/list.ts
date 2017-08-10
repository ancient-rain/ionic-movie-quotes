import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { MovieQuote } from "../../models/movie-quote";

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  movieQuotesStream: FirebaseListObservable<MovieQuote[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: AngularFireDatabase, public alertCtrl: AlertController) {
      this.movieQuotesStream = this.db.list('quotes');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  showAddQuoteDialog(): void {
    const prompt = this.alertCtrl.create({
      title: 'Add Quote',
      inputs: [
        {
          name: 'quote',
          placeholder: 'Quote'
        },
        {
          name: 'movie',
          placeholder: 'Movie'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data) => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add Quote',
          handler: (data) => {
            if (data.quote && data.movie) {
              this.movieQuotesStream.push(data);
            } else {
              return false;
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
