import { Injectable, OnInit } from '@angular/core';
import { Training } from '../model/Training.model';
import { Custommer } from '../model/Custommer';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  formation : Training[] = []
  custommer: Custommer ;
  constructor() {
    this.custommer = new Custommer("","","","","")
  }
  ngOnInit(): void {

  }

  saveCustommer(custommer: Custommer): void {
    this.custommer = custommer;
    console.log(this.custommer);
    console.log(this.formation)
  }
  getCustomer():Custommer{
    return this.custommer
  }

  //adding a new formation to the cart and remove and only display 1 training of each
  addTraining(training: Training): void {
    let found = false;
    for (let i = 0; i < this.formation.length; i++) {
      if (this.formation[i].id === training.id) {
        found = true;
        this.formation[i].quantity += training.quantity;
      }
    }
    if (!found) {
      this.formation.push(training);
      localStorage.setItem('formation', JSON.stringify(this.formation));
    }
  }


}
