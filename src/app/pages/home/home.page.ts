import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  record = [
    {
      description: 'Cambio de aceite',
      date: '27/02/2020',
      icon: 'receipt-outline'
    },
    {
      description: 'Cambio de llantas',
      date: '27/02/2020',
      icon: 'receipt-outline'
    },
    {
      description: 'Plumillas delanteras',
      date: '27/02/2020',
      icon: 'receipt-outline'
    },
    {
      description: 'Extintor',
      date: '27/02/2020',
      icon: 'receipt-outline'
    }
  ]

  constructor( private navCtrl : NavController) {}

  create () {
    this.navCtrl.navigateRoot('create-concept')
  }
}
