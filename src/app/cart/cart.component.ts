import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../shared/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
  }

}
