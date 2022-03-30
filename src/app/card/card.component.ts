import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}
