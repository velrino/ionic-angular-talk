import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CatossiserviceService {

  private url = 'https://raw.githubusercontent.com/matheuscatossi/talk-nerdzao-alphaville/master/example.json';

  constructor(private http: Http) { }

  get() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .subscribe(data => {
          resolve(data.json());
        }, (error => {
          reject(error);
        }));
    })
  }
}
