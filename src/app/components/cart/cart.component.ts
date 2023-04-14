import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/Training.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  listTraining : Training[] = [];
  total = 0;
  displayForm : boolean = false;
  constructor(public cartService: CartService){}

  ngOnInit(): void {

  this.listTraining = this.cartService.formation

  this.totalPrice(this.cartService.formation)
  }
//total price of all the cart
  totalPrice(training :Training[]){
    for(let i of training)
    this.total += (i.price * i.quantity)
  }
//trigger to show the form to create a new custommer
  showForm(){
    this.displayForm =!this.displayForm;
  }

  //delete training from the cart
  deleteTraining(training :Training){
    this.listTraining = this.listTraining?.filter((item) => item !== training );
    this.cartService.formation =  this.listTraining;
    this.total -= training.price;
  }
}


