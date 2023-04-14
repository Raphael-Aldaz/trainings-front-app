import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/Training.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-recap-order',
  templateUrl: './recap-order.component.html',
  styleUrls: ['./recap-order.component.sass']
})
export class RecapOrderComponent implements OnInit {
  recapFormation : Training[]=[]
  constructor(private cartService : CartService) {}
  ngOnInit(): void {

    this.recapFormation = this.cartService.formation;

  }
}
