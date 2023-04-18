import { Component } from '@angular/core';
import{state,trigger,style,animate,transition}from'@angular/animations';

@Component({
  selector: 'animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations:[
    trigger('Ball',[
    state('A',style({
      left:'10px'
    })),
    state('B',style({
      left:'700px'
    })),
transition('A=>B',[
  animate('8s')
]),
transition('B=>A',[
  animate('8s')
])

  ])
    

  ]
})
export class AnimationComponent {

hai=true;


person()
{
  this.hai=!this.hai;
}






}
