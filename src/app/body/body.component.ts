import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../addtocart.service';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public mobiles = [];
  public errormsg;
  public result: any;
  

  constructor(private _addtocart: AddtocartService, private dt: DataService) { }


  ngOnInit() {

    this.result=this._addtocart.getMobiles().subscribe(result => this.mobiles = result,
      error => this.errormsg = error);
    
    this.dt.mobdtls.subscribe(data=>this.mobiles=data);
  }
    pushMethod(){
          this.mobiles.push(this.result);
          console.log(this.mobiles);
    
  }


}
