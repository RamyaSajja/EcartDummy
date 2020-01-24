import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
   details:any;
  constructor(private dt:DataService) { }

  ngOnInit() {
  this.dt.mobdtls.subscribe(data=>this.details=data)
 }
  

  }


