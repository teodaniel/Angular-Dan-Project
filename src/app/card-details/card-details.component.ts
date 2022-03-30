import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor( private route: ActivatedRoute ) { 
    console.log('constructor() has obtained the activated route.')
  }

  ngOnInit(): void {
    console.log('ngOnInit() has fetched the route parameters')
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromFromRoute = Number(routeParams.get('productId'));

    //fetch the product with the productid in the route
    this.product = products.find(
      (product) => product.id === productIdFromFromRoute
    );
  }

}