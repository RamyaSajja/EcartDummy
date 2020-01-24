import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService{
public mobile=[]
  private mb = new BehaviorSubject(this.mobile);
  mobdtls = this.mb.asObservable();
  mobileDetails(data: any) {
    this.mb.next(data);
    console.log(data);
  }
}