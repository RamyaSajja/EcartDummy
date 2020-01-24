import { Injectable } from '@angular/core';
import { Mobiles } from './mobiles';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AddtocartService { 

  private url:string = "assets/mobiles.json"; 

  constructor(private http:HttpClient) { }


  getMobiles(): Observable<Mobiles[]> {
    return this.http.get<Mobiles[]>(this.url); 
  }

}
