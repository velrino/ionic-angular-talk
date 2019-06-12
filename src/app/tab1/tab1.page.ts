import { Component } from '@angular/core';
import { CatossiserviceService } from '../api/catossiservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public data = <any>[];

  constructor(private catossiserviceService: CatossiserviceService) {
    this.init();
  }
  
  async init(){
    this.data = await this.catossiserviceService.get();
  }

}
