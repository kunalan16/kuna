import { TmplAstVariable } from '@angular/compiler';
import { Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  student:any[]=[{
    name:'kuna',
    sub:'english',
    mark:85
  },
  {
    name:'manju',
    sub:'tamil',
    mark:'91'
    },
    {
      name:'Ram',
      sub:'java',
      mark:'45'

    
  }]

  





}
