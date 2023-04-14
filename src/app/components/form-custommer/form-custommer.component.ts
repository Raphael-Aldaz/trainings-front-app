import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Custommer } from 'src/app/model/Custommer';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-form-custommer',
  templateUrl: './form-custommer.component.html',
  styleUrls: ['./form-custommer.component.sass']
})
export class FormCustommerComponent implements OnInit {


constructor(public cartService : CartService, public router : Router){}
  ngOnInit():void {

  }
  onSaveCustommer(custommer: Custommer, myForm: NgForm){
    myForm.reset();
    this.cartService.saveCustommer(custommer);
    console.log(this.cartService.formation);
    this.router.navigateByUrl('/recap');

  }

}
