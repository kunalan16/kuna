import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  


})
export class AppComponent {
  title = 'kunal';
  bin=false;
  proc=false;


          
  url="products.components.html";

  binding()
{ 
this.bin=true;
this.proc=false;



}
pro()

{
  this.proc=true;
  this.bin=false;

}






}
