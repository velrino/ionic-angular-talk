import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CatossiserviceService {

  private url = 'https://raw.githubusercontent.com/matheuscatossi/talk-nerdzao-alphaville/master/example.json';

  constructor(
    private http: Http,
    private loadingController: LoadingController
  ) { }

  request() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .subscribe(data => {
          resolve(data.json());
        }, (error => {
          reject(error);
        }));
    })
  }

  async get() {
    let response = { error: false, result: null }

    const loading = await this.loadingController.create({
      message: 'Carregando Catossi',
    });
    await loading.present();

    await this.request()
      .then(result => Object.assign(response, { result }))
      .catch(result => Object.assign(response, { error: true, result }))
      .finally(
        () => loading.dismiss()
      )

    return response;
  }
}
