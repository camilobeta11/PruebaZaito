import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { EditDescriptionComponent } from '../../components/edit-description/edit-description.component';

@Component({
  selector: 'app-create-concept',
  templateUrl: './create-concept.page.html',
  styleUrls: ['./create-concept.page.scss'],
})
export class CreateConceptPage implements OnInit {

  data : any;

  constructor( private modalCtrl: ModalController,
               public toastCtrl: ToastController,
               private navCtrl: NavController) { }

  ngOnInit() {
  }

  async editDesription() {
    const modal = await this.modalCtrl.create({
      component: EditDescriptionComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
      }
    });
    await modal.present();
      const get  = await modal.onWillDismiss();
      this.data = get.data.description;
  }
  
  async create() {
    this.navCtrl.navigateRoot('home');
    const toast = await this.toastCtrl.create({
      color: 'primary',
      message: 'Se ha creado un nuevo concepto',
      duration: 2000,
      buttons: [
        {
          side: 'start',
          icon: 'car-sport-outline',
        }
      ]
    });
    toast.present();
  }
}
