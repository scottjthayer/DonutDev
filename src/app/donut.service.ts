import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donut, Result } from './donut';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  apiURL: string = 'https://grandcircusco.github.io/demo-apis/donuts';
  constructor(private http: HttpClient) { }

  getDonuts(): any {
    return this.http.get(this.apiURL + '.json');
  }

  getDonutById(id: number) {
    return this.http.get(this.apiURL + '/' + id + '.json');
  }

}
