import { ModalController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  };
  
  async closeModal() {
    await this.modalController.dismiss();
  };
};

