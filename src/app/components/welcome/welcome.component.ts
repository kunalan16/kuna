import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
  })
export class    welcomeComponent
{
  @Input()
  name="";
  nw="";

  @Output()
  hi=new EventEmitter();


  

  per()
  {
     alert("kunalan");
    // this.hi.emit(10);
  }

ngAfterViewInit()
{
  console.log("welcomecomponentngAfterViewInit")
}
ngAfterViewChecked()
{
  console.log("welcomecomponentngAfterViewChecked");

}
ngAfterContentInit()
{
  console.log("welcomecomponentngAfterContentInit");
 
}
ngAfterContentChecked()
{
  console.log("welcomecomponentngAfterContentChecked");
}





}