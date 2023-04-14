import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/Training.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.sass']
})
export class TrainingsComponent implements OnInit {

  listTraining : Training[] | undefined;

  constructor(private cartService : CartService, private router : Router){}
    ngOnInit(): void{
      this.listTraining = [
        {id: 1, name:'Java', description:'Formation Java SE 8 sur 5 jours', price: 1500, quantity:1},
        {id: 2, name:'DotNet', description:'Formation DotNet  sur 3 jours', price: 1000, quantity:1},
        {id: 3, name:'Python', description:'Formation Python sur 5 jours', price: 1500, quantity:1}
      ];
  }

  onAddToCart(training : Training){
    this.cartService.addTraining(training)
    this.router.navigateByUrl('cart');

  }

}
