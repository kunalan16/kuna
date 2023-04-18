import { Component } from "@angular/core";

@Component({
    selector: 'binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.scss']
  })
export class    BindingComponent
{


apple="hello";
url="https://www.google.com/";
orange="don";
show=true;
more=false;
array=[10,20,30,40];
key={kunalan:true};
bb={color:"red"}
yy=true;


rrr="";


person()
{
  // alert("kunalan");
  this.apple="manju";
  
}

hi()
{
this.yy=true;
}
hii()
{
this.yy=false;
}
one()
{
this.more=!this.more;
// if(this.show==true)
// {
//   this.show=false;
// }
// else
// {
//   this.show=true;
// }
}

two()
{
  // alert("kunal");
  this.rrr;

}

lan(value:any){
// alert("manju");
 
console.log(value);
}

ngOnInit()
{
  console.log("bindingcomponentngOnInit");
}

ngOnDestroy()
{
  console.log("bindingcomponentngOnDestroy");
}
ngOnChanges()
{
  console.log("bindingcomponentOnchanges");
}



manju()
{
  alert("kunalanmanju");
}






}