import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public siteData = {
    vistors:0,
    uniqueVistors:0
  }
  constructor(public http: HttpClient) {
    let dataApi = 'php/index.php';
    if(!environment.production){
      //dataApi = 'http://localhost/github/royalvds/' + dataApi;
    }
    this.http.get(dataApi).subscribe((res: any) => {
      console.log(res);
      this.siteData = res;
    });
   }

  sendMail(subject, message): Promise<any> {
    let body = {
      "from": "Interior Query<user@sunnysingh.in>",
      "to": "sunnysingh.vpcoe@gmail.com",
      "cc": "sunny.epicor@gmail.com",
      "subject": subject,
      "message": message
    }
    return new Promise((resolve)=>{
      //this.http.post("http://localhost:8080/sendmail", body).subscribe((res: any)=>{
      this.http.post("https://mailwaala.herokuapp.com/sendmail", body).subscribe((res: any) => {
        console.log(res);
        resolve(res);
      });
    });
    
  }
}
