import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'httpclient',
  templateUrl: './httpclient-to-extendservice.component.html',
  styleUrls: ['./httpclient-to-extendservice.component.scss']
})
export class HttpclientToExtendserviceComponent {

response:any;

  constructor(public httpClient:HttpClient){
      this.httpClient.get('https://catfact.ninja/fact')
      .subscribe((response)=>{
        console.log(response)
        this.response=response;
      })
      
  }


}
