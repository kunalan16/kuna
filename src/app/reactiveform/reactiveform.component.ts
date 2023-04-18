import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {

  username=new FormControl('');
  registrationform=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')

  });

 person()
 {
  console.log(this.username);
  this.username.setValue('hello');
 }
 per()
 {
   console.log(this.registrationform);
   this.registrationform.patchValue({
    username:'suresh',
    // password:'ramesh'
   });
 }


 
}
