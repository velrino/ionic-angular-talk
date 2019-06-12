import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CatossiserviceService } from '../api/catossiservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public data = <any>[];

  constructor(
    private catossiserviceService: CatossiserviceService,
    private toastController: ToastController) {
    this.init();
  }

  async init() {
    const getData = await this.catossiserviceService.get();
    const haveError = getData.error;
    this.data = (haveError) ? [] : getData.result;
    
    if (haveError) {
      const toast = await this.toastController.create({
        message: 'Falha na requisição',
        color: 'danger',
        position: 'bottom'
      });
      toast.present();
    }

  }

}
