import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass']
})
export class TravelsComponent implements OnInit {
  product;
  products = products;
  constructor( private route: ActivatedRoute,private cartService: CartService) { }
  
  addToCart(product) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(product);
 }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
   this.product = products[+params.get('productId')];
  });

}
}
