import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // 指出其属性值是从组件的父组件（商品列表）中传入的
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}
