import { ThisReceiver } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
                                        
@Input()
name=0;
       
 value=5;



getArrayWithElement(n:number):any
{
      

let aa:any[]=[];
let i;
for(i=0;i<=n;i++){
  aa.push(i);
}
return aa;
}

css(value:any)
{

this.value=value;
console.log(value);
}

ngOnInit()
{
  console.log("ratingcomponentngOnInit");
}

ngOnDestroy()
{
  console.log("ratingcomponentngOnDestroy");
}
ngOnChanges()
{
  console.log("ratingcomponentOnchanges");
}
ngDoCheck()
{
  console.log("ratingcomponentDoCheck");
}



}