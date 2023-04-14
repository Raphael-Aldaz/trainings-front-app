import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { FormCustommerComponent } from './components/form-custommer/form-custommer.component';
import { RecapOrderComponent } from './components/recap-order/recap-order.component';

const routes: Routes = [
  {path : 'trainings',component : TrainingsComponent},
  {path:'cart', component: CartComponent},
  {path:'form', component: FormCustommerComponent},
  {path:'recap', component: RecapOrderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
