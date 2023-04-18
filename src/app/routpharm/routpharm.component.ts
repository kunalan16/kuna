import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'routpharm',
  templateUrl: './routpharm.component.html',
  styleUrls: ['./routpharm.component.scss']
})
export class RoutpharmComponent {



id:any='';
constructor(public route:ActivatedRoute)
{
this.id=this.route.snapshot.paramMap.get('id');


}
}
