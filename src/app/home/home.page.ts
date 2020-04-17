import { SecondPage } from './../modal/second/second.page';
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: number
  result: number;
  selectedScale: number = 125;

  constructor(private modalController: ModalController) {}

  scaleValue(event: { target: { value: number; }; }){
    this.selectedScale = event.target.value;
  };

  async openModal() {
    const modal = await this.modalController.create({
      component: SecondPage
    });
    return await modal.present();
  }
  public calcX() {
    if(this.selectedScale != undefined && this.name != undefined){
      this.result = (100/this.selectedScale) * this.name;
    };
  }
  public calcY() {
    if(this.selectedScale != undefined && this.name != undefined){
      this.result = this.name / (100/this.selectedScale);
    };
  }
};
