import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // 指出其属性值是从组件的父组件（商品列表）中传入的
  @Input() product;
  // 可以让商品提醒组件在notify属性发生变化时发出事件
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
