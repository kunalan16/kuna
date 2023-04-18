import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {


pipes='kunalan';
number=6.4;
person=0.7;
date=new Date;

person1={name:"kunalan",age:10,phone:9715};
current=100;
hai="manju";
hel='The AutofillMonitor is an injectable service that allows the user to monitor the autofill state';



}
