import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }
  baseURL = "https://dog.ceo/api/breeds/image/random";


  getDogs(){
    var observable =  this.http.get(this.baseURL);
    return observable;
  }
}
