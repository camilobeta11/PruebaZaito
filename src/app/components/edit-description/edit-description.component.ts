import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.scss'],
})
export class EditDescriptionComponent implements OnInit {

  description: string;

  constructor( private modalCtrl:ModalController) { }

  ngOnInit() {}

  async dataModal() {
    this.modalCtrl.dismiss({
      description: this.description
    });
  }

  cancel() {
    this.modalCtrl.dismiss({});
  }

}
