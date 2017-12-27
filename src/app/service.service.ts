import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {

  respData:any;
  constructor(private httpClient:HttpClient) { }

  // callServer(){
  //   return this.httpClient.get('/api').map((res:Response)=> res);
  // }
  //
  // callPostServer(){
  //   return this.httpClient.post('/api','hello').map((res:Response)=> res);
  // }

  sendSomeData(details){
    this.respData = this.httpClient.post('/api','hello').subscribe(data => {
        console.log(data);
    });
    // this.callPostServer().subscribe(data => {
    //   console.log(data);
    // });
    // console.log(details);
  }

}
